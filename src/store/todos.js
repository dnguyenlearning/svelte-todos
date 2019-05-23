import {writable} from "svelte/store";

const initTodos = [
    {id: 1, title: 'some text title todos 1', done: false},
    {id: 2, title: 'some text title todos 2', done: false},
    {id: 3, title: 'some text title todos 3', done: false},
    {id: 4, title: 'some text title todos 4', done: false},
    {id: 5, title: 'some text title todos 5', done: false},
    {id: 6, title: 'some text title todos 6', done: false},
]

function createTodo(){
    const {subscribe, set, update} = writable(initTodos)

    const addTodo = (todo) => update(todos => [todo, ...todos]);
    const removeTodo = (todoId) => update(todos=> todos.filter(todo => todo.id !== todoId));
    const toggleStatus = (todoId) => update(todos => todos.map(todo => {
        if(todo.id === todoId)
        todo.done = !todo.done;
        return todo;
    }))

    const resetTodo = ()=> set(initTodos)
    return {
        subscribe,
        addTodo,
        removeTodo,
        toggleStatus
    }
}

export const todo = createTodo();