import {appendTo, h} from './micro';
import {MicroNode} from "./micro_types";
import  "./mobx_connect";
import {computed, IObservableValue, observable} from "mobx";

interface Todo {
    id: number,
    completed: IObservableValue<boolean>,
    text: IObservableValue<string>,
}

let ids = 0;
const todos = observable.array([
    { id: ids++, completed: observable.box(true), text: observable.box('Taste JavaScript') },
    { id: ids++, completed: observable.box(false), text: observable.box('Buy a unicorn') },
]);

const filters: ['all', 'active', 'completed'] = ['all', 'active', 'completed'];

const filter = observable.box<typeof filters[number]>('all');

function TodoApp() {

    const onKeydown = (e: KeyboardEvent) => {
        const target = e.target as HTMLInputElement;
        if (e.key === 'Enter' && target.value) {
            todos.push({id: ids++, completed: observable.box(false), text: observable.box(target.value)});
            target.value = '';
        }
    };

    const itemsLeft = computed(() => todos.reduce((c, t) => t.completed.get() ? c : c + 1, 0));

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
                    {todos.map(todo => <Todo todo={todo} />)}
                </ul>
            </section>
            <footer class="footer">
                <span class="todo-count"><strong>{itemsLeft}</strong> item left</span>
                <ul class="filters">
                    {filters.map(filterName => (
                        <li>
                            <a onClick={() => filter.set(filterName)} class={computed(() => filter.get() === filterName ? 'selected' : '')} href="#">{filterName}</a>
                        </li>
                    ))}
                </ul>
                <button class="clear-completed">Clear completed</button>
            </footer>
        </section>
    );
}

function Todo({todo}: { todo: Todo }): MicroNode {
    const onDelete = () => {
        const i = todos.findIndex(({id}) => todo.id === id);
        todos.splice(i, 1);
    };

    const onToggle = () => {
        todo.completed.set(!todo.completed.get());
    };


    return computed(() => {
        const f = filter.get();
        const c = todo.completed.get();
        return f === 'all' || f === 'completed' && c || f === 'active' && !c
            ? (
                <li class={computed(() => todo.completed.get() ? 'completed' : '')}>
                    <div class="view">
                        <input class="toggle" type="checkbox" checked={todo.completed} onChange={onToggle}/>
                        <label>{todo.text}</label>
                        <button class="destroy" onClick={onDelete}/>
                    </div>
                    <input class="edit" value={todo.text}/>
                </li>
            )
            : null;

    });
}

appendTo(document.getElementById('root')!, <TodoApp/>);
