import {Subscribable, Unsubscribable} from "rxjs";
import {ArrayUpdate, MicroNode} from "./micro_types";

const updates: (() => void)[] = [];

requestAnimationFrame(function runUpdates() {
    let update;
    while (update = updates.shift()) {
        update();
    }
    requestAnimationFrame(runUpdates);
});

export function h(tag: string | ((props: any) => Node), props: Record<string, any>, ...children: MicroNode[]): MicroNode {

    if (typeof tag === 'function') {
        return tag({...props, children});
    }

    const ele = document.createElement(tag);
    const subscribles: ((ele: Element) => Unsubscribable)[] = [];
    let unsubscribables: Unsubscribable[];

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

    return subscribles.length
        ? {
            root: ele,
            children: [nodeTree],
            lastNode: ele,
            onAdd: () => unsubscribables = subscribles.map(s => s(ele)),
            onRemove: () => unsubscribables.forEach(s => s.unsubscribe()),
        }
        : nodeTree;
}

export function appendTo(target: Node, source: MicroNode) {
    const nodeTree = renderNode(source, target, null, target.lastChild);
    add(nodeTree);
}

type OptionalNode = Node | null | undefined;

interface NodeTree {
    root: Node,
    parent: NodeTree | null,
    lastNode: OptionalNode,
    children: (NodeTree | OptionalNode)[],
    onAdd?: (ele: Node) => void,
    onRemove?: () => void,
    isOnDom?: boolean,
}

function renderNode(node: MicroNode, root: Node, parent: NodeTree | null, insertAfter: OptionalNode): NodeTree | OptionalNode {
    if (node instanceof Node) {
        root.insertBefore(node, insertAfter ? insertAfter.nextSibling : root.firstChild);
        return node;
    } else if (typeof node === 'string' || typeof  node === 'number') {
        const n = document.createTextNode(node.toString());
        root.insertBefore(n, insertAfter ? insertAfter.nextSibling : root.firstChild);
        return n;
    } else if (isSubscribable(node)) {
        const nodeTree: NodeTree = { root, children: [], lastNode: null, parent };
        nodeTree.onAdd = root => {
            let oldValue: MicroNode | undefined;
            const unsub = node.subscribe(value => updates.push(() => {
                if (value === oldValue) {
                    return;
                }
                oldValue = value;
                if (isReadonOnlyArray(value)) {
                    handleArrayUpdate(root, value, nodeTree);
                } else {
                    remove(root, nodeTree.children[0], true);
                    const childNodeTree = renderNode(value, root, nodeTree, getInsertAfter(nodeTree));
                    nodeTree.children[0] = childNodeTree;
                    nodeTree.lastNode = getLastNode(childNodeTree);
                    add(nodeTree.children[0]);
                }
            }));
            nodeTree.onRemove = () => unsub.unsubscribe();
        };
        return nodeTree;
    } else if (isReadonOnlyArray(node)) {
        const nodeTree: NodeTree = {
            root,
            children: Array(node.length),
            lastNode: null,
            parent
        };
        for (let i = 0; i < node.length; ++i) {
            const childNodeTree = renderNode(node[i], root, nodeTree, nodeTree.lastNode || insertAfter);
            nodeTree.children[i] = childNodeTree;
            nodeTree.lastNode = getLastNode(childNodeTree) || nodeTree.lastNode;
        }
        return nodeTree;
    } else if (node) {
        const child = node as NodeTree;
        root.insertBefore(child.root, insertAfter ? insertAfter.nextSibling : root.firstChild);
        let nodeTree = {
            root,
            children: [child],
            parent,
            lastNode: child.root
        };
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

        for (const added of addedChildren) {
            add(added);
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
    while (parent && parent.root === child.root) {
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

function add(nodeTree: NodeTree | OptionalNode) {
    if (!(nodeTree instanceof Node) && nodeTree && !nodeTree.isOnDom) {
        nodeTree.isOnDom = true;
        nodeTree.onAdd && nodeTree.onAdd(nodeTree.root);
        for (const child of nodeTree.children) {
            add(child);
        }
    }
}

function remove(root: Node, nodeTree: NodeTree | OptionalNode, removeFromDom: boolean) {
    if (nodeTree instanceof Node) {
        removeFromDom && root.removeChild(nodeTree);
    } else if (nodeTree) {
        if (removeFromDom && (!nodeTree.parent || nodeTree.parent.root !== nodeTree.root)) {
            root.removeChild(nodeTree.root);
            removeFromDom = false;
        }
        for (const child of nodeTree.children) {
            remove(nodeTree.root, child, removeFromDom);
        }
        nodeTree.onRemove && nodeTree.onRemove();
        nodeTree.isOnDom = false;
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