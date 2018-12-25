import {Subscribable, Unsubscribable} from "rxjs";
import {ArrayUpdate, MicroNode} from "./micro_types";

const eles = new WeakMap<Node, { onAdd: (ele: Element) => void, onRemove: (ele: Element) => void }>();
const updates: (() => void)[] = [];

requestAnimationFrame(function runUpdates() {
    let update;
    while (update = updates.shift()) {
        update();
    }
    requestAnimationFrame(runUpdates);
});

new MutationObserver(records => {
    for (const record of records) {
        for (const root of record.addedNodes) {
            if (root instanceof Element) {
                for (const node of [root, ...root.getElementsByTagName('*')]) {
                    const cbs = eles.get(node);
                    cbs && cbs.onAdd(node);
                }
            }
        }
        for (const root of record.removedNodes) {
            if (root instanceof Element) {
                for (const node of [root, ...root.getElementsByTagName('*')]) {
                    const cbs = eles.get(node);
                    cbs && cbs.onRemove(node);
                }
            }
        }
    }
}).observe(document.body, {childList: true, subtree: true});

export function h(tag: string | ((props: any) => Node), props: Record<string, any>, ...children: MicroNode[]): MicroNode {

    if (typeof tag === 'function') {
        return tag({...props, children});
    }

    const ele = document.createElement(tag);
    const subscribles: ((ele: Element) => Unsubscribable)[] = [];
    let unsubscribables: Unsubscribable[] = [];

    if (props) {
        for (const prop of Object.keys(props)) {
            const v = props[prop];
            if (isSubscribable(v)) {
                let previousV: any = null;
                subscribles.push(ele => v.subscribe(v => updates.push(() => {
                    applyProp(ele, prop, v, previousV);
                    previousV = v;
                })))
            } else {
                applyProp(ele, prop, v, null);
            }
        }
    }

    const nodeTree = renderNode(children, ele, null, null);

    eles.set(ele, {
        onAdd: ele => {
            add(ele, nodeTree);
            unsubscribables = subscribles.map(s => s(ele));
        },
        onRemove: () => {
            remove(ele, nodeTree, false);
            unsubscribables.forEach(s => s.unsubscribe());
        }
    });

    return ele;
}

type OptionalNode = Node | null | undefined;

type NodeTree = {
    parent: NodeTree | null,
    lastNode: OptionalNode,
    children: (NodeTree | OptionalNode)[],
    sub?: (ele: Node) => void,
    unsub?: () => void,
    onDom?: boolean,
};

function renderNode(node: MicroNode, root: Node, parent: NodeTree | null, insertAfter: OptionalNode): NodeTree | OptionalNode {
    if (node instanceof Node) {
        root.insertBefore(node, insertAfter ? insertAfter.nextSibling : root.firstChild);
        return node;
    } else if (typeof node === 'string' || typeof  node === 'number') {
        const n = document.createTextNode(node.toString());
        root.insertBefore(n, insertAfter ? insertAfter.nextSibling : root.firstChild);
        return n;
    } else if (isSubscribable(node)) {
        const nodeTree: NodeTree = { children: [], lastNode: null, parent };
        nodeTree.sub = root => {
            const unsub = node.subscribe(child => {
                if (isReadonOnlyArray(child)) {
                    handleArrayUpdate(root, child, nodeTree);
                } else {
                    remove(root, nodeTree.children[0], true);
                    const childNodeTree = renderNode(child, root, nodeTree, getInsertAfter(nodeTree));
                    nodeTree.children[0] = childNodeTree;
                    nodeTree.lastNode = getLastNode(childNodeTree);
                }
            });
            nodeTree.unsub = () => unsub.unsubscribe();
        };
        parent && parent.onDom && add(root, nodeTree);
        return nodeTree;
    } else if (isReadonOnlyArray(node)) {
        const nodeTree: NodeTree = { children: Array(node.length), lastNode: null, parent, onDom: !!parent && parent.onDom };
        for (let i = 0; i < node.length; ++i) {
            const childNodeTree = renderNode(node[i], root, nodeTree, nodeTree.lastNode || insertAfter);
            nodeTree.children[i] = childNodeTree;
            nodeTree.lastNode = getLastNode(childNodeTree) || nodeTree.lastNode;
        }
        parent && parent.onDom && add(root, nodeTree);
        return nodeTree;
    } else {
        return null;
    }
}

function handleArrayUpdate(root: Node, updates: ReadonlyArray<ArrayUpdate>, nodeTree: NodeTree) {
    let insertAfter = getInsertAfter(nodeTree);
    let index = 0;

    for (const update of updates) {
        const addedChildren: NodeTree['children'] = [];

        while (index < update.index) {
            insertAfter = getLastNode(nodeTree.children[index++]) || insertAfter;
        }

        for (let i = 0; i < update.removed; ++i) {
            remove(root, nodeTree.children[index + i], true);
        }

        for (const added of update.added) {
            const childNodeTree = renderNode(added, root, nodeTree, insertAfter);
            insertAfter = getLastNode(childNodeTree) || insertAfter;
            addedChildren.push(childNodeTree);
        }

        nodeTree.children.splice(index, update.removed, ...addedChildren);

        if (nodeTree.onDom) {
            for (const added of addedChildren) {
                add(root, added);
            }
        }
    }

    nodeTree.lastNode = null;
    for (let i = nodeTree.children.length - 1; i >= 0; --i) {
        nodeTree.lastNode = getLastNode(nodeTree.children[i]);
        if (nodeTree.lastNode) {
            break;
        }
    }
}

function getLastNode(childNodeTree: NodeTree | OptionalNode) {
    return childNodeTree && (childNodeTree instanceof Node ? childNodeTree : childNodeTree.lastNode);
}

function getInsertAfter(child: NodeTree): OptionalNode {
    let parent = child.parent;
    while (parent) {
        let lastNode;
        for (let i = 0; i < parent.children.length && parent.children[i] !== child; ++i) {
            lastNode = getLastNode(parent.children[i])
        }

        if (lastNode) {
            return lastNode;
        } else {
            child = parent;
            parent = parent.parent;
        }
    }

    return null;
}

function add(root: Node, nodeTree: NodeTree | OptionalNode) {
    if (!(nodeTree instanceof Node) && nodeTree && !nodeTree.onDom) {
        nodeTree.onDom = true;
        nodeTree.sub && nodeTree.sub(root);
        for (const child of nodeTree.children) {
            add(root, child);
        }
    }
}

function remove(root: Node, nodeTree: NodeTree | OptionalNode, removeFromDom: boolean) {
    if (nodeTree instanceof Node) {
        removeFromDom && root.removeChild(nodeTree);
    } else if (nodeTree) {
        for (const child of nodeTree.children) {
            remove(root, child, removeFromDom);
        }
        nodeTree.unsub && nodeTree.unsub();
        nodeTree.onDom = false;
    }
}

function applyProp(ele: Element, propName: string, value: any, previousValue: any) {
    if (propName.startsWith('on')) {
        const eventName = propName.substr(2).toLowerCase();
        previousValue && ele.removeEventListener(eventName, previousValue);
        ele.addEventListener(eventName, value);
    } else if (value === false) {
        ele.removeAttribute(propName);
    } else {
        ele.setAttribute(propName, value);
    }
}

function isReadonOnlyArray(a: any): a is ReadonlyArray<any> {
    return Array.isArray(a)
}

function isSubscribable(o: any): o is Subscribable<any> {
    return o && o[Symbol.observable || '@@observable'] != null;
}