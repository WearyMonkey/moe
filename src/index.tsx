import {BehaviorSubject, combineLatest, interval, Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {h} from './micro';
import {arrayUpdates} from "./observable_connect";

const foo = new BehaviorSubject(0);
interval(10).subscribe(foo);

function EvenOdd({ a, b }: { a: Observable<number>, b: Observable<number> }): Node {
    const baa = combineLatest(a, b).pipe(map(([a, b]) => a + b));
    const c1 = <Counter/>;
    return (
        <div>
            {a}-{b}-{baa}-
            {baa.pipe(map(baa => baa % 2 ? <div>c1 {c1}</div> : <div>c2 <Counter/></div>))}
            <button onClick={() => foo.next(foo.value + 1)}>Increment</button>
        </div>
    );
}

function Counter() {
    const value = new BehaviorSubject(0);
    return (
        <div>
            {value}
            <button onClick={() => value.next(value.value + 1)}>Increment</button>
        </div>
    )
}

function JustAnElement() {
    return document.createTextNode('hello');
}

// document.getElementById('root')!.appendChild(<EvenOdd a={foo} b={of(1)}/>);


const n = new BehaviorSubject<number[]>([1, 2, 3]);

document.getElementById('root')!.appendChild(<div>
    {n.pipe(arrayUpdates(n => ({ key: n, node: () => <span>{n}</span> })))}
</div>);
