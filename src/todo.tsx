import {h} from './micro';
import {BehaviorSubject, combineLatest, Observable} from "rxjs";
import {arrayUpdates} from "./observable_connect";
import {map, mergeMap} from "rxjs/operators";
import {MicroNode} from "./micro_types";

interface Todo {
    id: number,
    completed: BehaviorSubject<boolean>,
    text: BehaviorSubject<string>,
}

let ids = 0;
const todos = new BehaviorSubject<Todo[]>([
    { id: ids++, completed: new BehaviorSubject(true), text: new BehaviorSubject('Taste JavaScript') },
    { id: ids++, completed: new BehaviorSubject(false), text: new BehaviorSubject('Buy a unicorn') },
]);

const filters: ['all', 'active', 'completed'] = ['all', 'active', 'completed'];

const filter = new BehaviorSubject<typeof filters[number]>('all');

function TodoApp() {

    const onKeydown = (e: KeyboardEvent) => {
        const target = e.target as HTMLInputElement;
        if (e.key === 'Enter' && target.value) {
            todos.next([...todos.getValue(), {id: ids++, completed: new BehaviorSubject(false), text: new BehaviorSubject(target.value)}]);
            target.value = '';
        }
    };

    const itemsLeft = todos.pipe(map(todos => todos.reduce((c, t) => t.completed ? c : c + 1, 0)));

    return (
        <section class="todoapp">
            <header class="header">
                <h1>todos</h1>
                <input class="new-todo" placeholder="What needs to be done?" onKeyDown={onKeydown} autoFocus/>
            </header>
            <section class="main">
                <input id="toggle-all" class="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul class="todo-list">
                    {todos.pipe(arrayUpdates(todo => ({ key: todo.id, node: () => <Todo todo={todo} /> })))}
                </ul>
            </section>
            <footer class="footer">
                <span class="todo-count"><strong>{itemsLeft}</strong> item left</span>
                <ul class="filters">
                    {filters.map(filterName => (
                        <li>
                            <a onClick={() => filter.next(filterName)} class={filter.pipe(map(f => f === filterName  ? 'selected' : ''))} href="#">{filterName}</a>
                        </li>
                    ))}
                </ul>
                <button class="clear-completed">Clear completed</button>
            </footer>
        </section>
    );
}

function Todo({ todo }: { todo: Todo }): MicroNode {
    const onDelete = () => {
        todos.next(todos.value.filter(({ id }) => todo.id !== id));
    };

    const onToggle = () => {
        todo.completed.next(!todo.completed.value);
    };

    return combineLatest(filter, todo.completed).pipe(map(([f, c]) => f === 'all' || f === 'completed' && c || f === 'active' && !c
        ? (
            <li class={todo.completed.pipe(map(c => c ? 'completed' : ''))}>
                <div class="view">
                    <input class="toggle" type="checkbox" checked={todo.completed} onChange={onToggle}/>
                    <label>{todo.text}</label>
                    <button class="destroy" onClick={onDelete}></button>
                </div>
                <input class="edit" value={todo.text}/>
            </li>
        )
        : null
    ));
}

document.getElementById('root')!.appendChild(<TodoApp/>);
