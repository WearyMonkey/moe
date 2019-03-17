
const BoxSymbol = Symbol();

namespace Ops {
    function add(lhs: Box<number>, rhs: Box<number>) {
        return new Box(1);
    }
}

export class Box<T> {
    private readonly [BoxSymbol] = true;
    private readonly listeners = new Set<(value: T) => void>();

    constructor(
        private value: T,
    ) {}

    subscribe(cb: (value: T) => void): { unsubscribe(): void } {
        this.listeners.add(cb);
        return { unsubscribe: () => this.listeners.delete(cb) };
    }

    set(value: T) {

    }

    get(): T {

    }
}

const f = new Box(1) + new Box(2);

function isBox<T>(b: Box<T> | T): b is Box<T> {
    return (b as any)[BoxSymbol] === true;
}

type UnBox<T> = T extends Box<infer U> ? U : T;
type UnBoxCollection<T extends (Box<any> | any)[]> = { [k in keyof T]: UnBox<T[k]> };

export function compute<T extends (Box<any> | any)[], U>(c: (...v: UnBoxCollection<T>) => U, ...boxes: T): Box<U> {
    return null as any;
}

export class BoxArray<T> {
    constructor(
        private values: T[],
    ) {

    }

    push(v: T) {

    }

    reduce<U>(acc: (a: U, c: DeepUnBoxify<T>) => U, initial: U): DeepBoxify<U> {
        return null as any;
    }

    map<U>(cb: (v: DeepUnBoxify<T>) => U): BoxArray<U> {
        return null as any;
    }

    filter<P extends (Box<any> | any)[]>(cb: (v: DeepUnBoxify<T>, ...p: UnBoxCollection<P>) => boolean, ...p: P): BoxArray<T> {
        return null as any;
    }
}

export type DeepBoxify<T> =
    T extends ReadonlyArray<infer U> ? DeepBoxifyArray<U> :
    T extends Record<string, any> ? DeepBoxifyRecord<T> :
    Box<T>;

interface DeepBoxifyArray<T> extends BoxArray<DeepBoxify<T>> {}
interface DeepBoxifyRecord<T> extends Box<{ [k in keyof T]: DeepBoxify<T[k]> }> {}


type DeepUnBoxify<T> = {
    'array': T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepUnBoxify<U>> : never,
    'boxArray': T extends BoxArray<infer U> ? ReadonlyArray<DeepUnBoxify<U>> : never,
    'box': T extends Box<infer U> ? DeepUnBoxify<U> : never
    'record': T extends Record<string, any> ? { [k in keyof T]: DeepUnBoxify<T[k]> } : never
    'end': T,
}[
    T extends ReadonlyArray<any> ? 'array' :
    T extends BoxArray<any> ? 'boxArray' :
    T extends Box<any> ? 'box' :
    T extends Record<string, any> ? 'record'
    : 'end'
]

export type ShallowBoxify<T> =
    T extends ReadonlyArray<infer U> ? BoxArray<U> :
    Box<T>;

export function box<T>(v: T): DeepBoxify<T> {

}
