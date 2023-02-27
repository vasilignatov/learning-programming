import { useState } from 'react';
import TodoItem from './TodoItem.js';
import uniqid from 'uniqid';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: uniqid(), text: 'Clean my room', isDone: false },
        { id: uniqid(), text: 'Go to the gym', isDone: false },
        { id: uniqid(), text: 'Make dinner', isDone: false },
        { id: uniqid(), text: 'Wash dishes', isDone: false }
    ]);

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false
        }

        setTodos(oldState => [
            ...oldState,
            todo
        ]);
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