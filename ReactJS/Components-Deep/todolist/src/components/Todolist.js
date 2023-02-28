import { useState, useEffect } from 'react';
import TodoItem from './TodoItem.js';
import uniqid from 'uniqid';
import { API_URL, createTodo } from '../services/todoService.js'

export default function TodoList() {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => console.log(err));
    }, []);

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false
        }

        createTodo(todo)
            .then(result => {
                setTodos(oldState => [
                    ...oldState,
                    result
                ]);
                
                e.target.value = '';
            })
            .catch(err => console.log(err));

    }

    const deleteTodoListItemClickHandler = (ev, id) => {
        ev.stopPropagation();
        setTodos(oldState => oldState.filter(todo => todo.id != id));
    }

    const toggleClickItemHandler = (id) => {
        setTodos(oldState => {
            let selectedTodo = oldState.find(todo => todo.id == id);
            let selectedTodoIndex = oldState.findIndex(todo => todo.id == id);
            let toggled = { ...selectedTodo, isDone: !selectedTodo.isDone };

            return [
                ...oldState.slice(0, selectedTodoIndex),
                toggled,
                ...oldState.slice(selectedTodoIndex)
            ];
        });
    }

    return (
        <>
            <label htmlFor="todo-name">Add Todo</label>
            <input type="text" name="todo" id="todo-name"
                onBlur={onTodoInputBlur}>
            </input>

            <ul>
                {todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodoListItemClickHandler}
                        onClick={toggleClickItemHandler}
                    />)
                }
            </ul>
        </>
    );
}