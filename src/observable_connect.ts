import {OperatorFunction} from "rxjs";
import {ArrayUpdate, MicroNodePrimitive} from "./micro_types";
import {map} from "rxjs/operators";

interface Foo {
    key: string | number;
    node: () => MicroNodePrimitive;
}

export function arrayUpdates<T>(fn: (v: T) => Foo): OperatorFunction<ReadonlyArray<T>, ArrayUpdate[]> {
    return (source) => {
        let previous: Foo[] | undefined;
        return source.pipe(map(vs => {
            if (!previous) {
                previous = vs.map(fn);
                return [{
                    index: 0,
                    added: previous.map(v => v.node()),
                    removed: 0,
                }]
            } else {
                const updates: ArrayUpdate[] = [];
                const next = vs.map(fn);
                let p = 0;
                let n = 0;

                while (p < previous.length || n < next.length) {
                    if (p === previous.length) {
                        updates.push({
                            index: n,
                            added: [next[n].node()],
                            removed: 0,
                        });
                        n++;
                    } else if (n === next.length) {
                        updates.push({
                            index: p++,
                            added: [],
                            removed: 1,
                        })
                    } else if (previous[p].key === next[n].key) {
                        p++;
                        n++;
                    } else {
                        updates.push({
                            index: p++,
                            added: [next[n++].node()],
                            removed: 1,
                        });
                    }
                }

                previous = next;


                return updates
            }
        }));
    };
}
