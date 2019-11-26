import {appendTo, h} from './micro';
import {JSX} from "./observable_connect";
import {MicroNode} from "./micro_types";
import {Box, box, compute, Ops_Box} from "./moe_data";

type Todo = {
    id: Box<number>,
    completed: Box<boolean>,
    text: Box<string>,
};

let ids = 0;
const todos: Todo[] = [
    { id: box(ids++), completed: box(true), text: box('Taste JavaScript') },
    { id: box(ids++), completed: box(false), text: box('Buy a unicorn') },
];

const filters: ['all', 'active', 'completed'] = ['all', 'active', 'completed'];

const filter = box('all');

function TodoApp() {

    const onKeydown = (e: KeyboardEvent) => {
        const target = e.target as HTMLInputElement;
        if (e.key === 'Enter' && target.value) {
            todos.push({id: box(ids++), completed: box(false), text: box(target.value)});
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
                    {todos
                        .filter(t => filter === 'all' || filter === 'completed' && t.completed || filter === 'active' && !t.completed)
                        .map(todo => <Todo todo={todo}/>)}
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

function Todo({ todo }: { todo: Todo }): MicroNode {
    const onDelete = () => {
        todos.splice(todos.indexOf(todo), 1);
    };

    const onToggle = () => {
        todo.completed.set(!todo.completed.get());
    };

    return (
        <li class={compute(c => c ? 'completed' : '', todo.completed)}>
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
