import {appendTo, h} from './micro';
import {BehaviorSubject, combineLatest} from "rxjs";
import {arrayUpdates, JSX} from "./observable_connect";
import {map} from "rxjs/operators";
import {MicroNode} from "./micro_types";
import {box, boxArray, BoxArray, compute, ShallowBoxify} from "./moe_data";

type Todo = {
    id: number,
    completed: boolean,
    text: string,
};

let ids = 0;
const todos = box([
    { id: ids++, completed: true, text: 'Taste JavaScript' },
    { id: ids++, completed: false, text: 'Buy a unicorn' },
]);

const filters: ['all', 'active', 'completed'] = ['all', 'active', 'completed'];

const filter = box<typeof filters[number]>('all');

function TodoApp() {

    const onKeydown = (e: KeyboardEvent) => {
        const target = e.target as HTMLInputElement;
        if (e.key === 'Enter' && target.value) {
            todos.push(box({id: ids++, completed: false, text: target.value}));
            target.value = '';
        }
    };

    const itemsLeft = todos.reduce((c, t) => t.completed ? c : c + 1, 0);

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
                    {todos.filter(filterTodo, filter).map(todo => <Todo todo={todo}/>)}
                </ul>
            </section>
            <footer class="footer">
                <span class="todo-count"><strong>{itemsLeft}</strong> item left</span>
                <ul class="filters">
                    {filters.map(filterName => (
                        <li>
                            <a
                                onClick={() => filter.set(filterName)}
                                class={compute(f => f === filterName  ? 'selected' : '', filterName)}
                                href="#"
                            >{filterName}</a>
                        </li>
                    ))}
                </ul>
                <button class="clear-completed">Clear completed</button>
            </footer>
        </section>
    );
}

function filterTodo(t: Todo, f: string): boolean {
    return f === 'all' || f === 'completed' && t.completed || f === 'active' && !t.completed;
}

function Todo({ todo }: { todo: Todo }): MicroNode {
    const onDelete = () => {
        todos.splice(todos.indexOf(todo), 1);
    };

    const onToggle = () => {
        todo.completed.set(!todo.completed.get());
    };

    return (
        <li class={todo.completed.pipe(map(c => c ? 'completed' : ''))}>
            <div class="view">
                <input class="toggle" type="checkbox" checked={todo.completed} onChange={onToggle}/>
                <label>{todo.text}</label>
                <button class="destroy" onClick={onDelete}/>
            </div>
            <input class="edit" value={todo.text}/>
        </li>
    );
}

appendTo(document.getElementById('root')!, <TodoApp/>);
