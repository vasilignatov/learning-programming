import { useState } from 'react';
import ToDoListItem from './TodoListItem.js';

export default function ToDoList() {
    let [count, setCount] = useState(0);

    return (
        <>
            <h2>Counter</h2>

            <ul>
                <ToDoListItem>{count}</ToDoListItem>
            </ul>


            <button onClick={() => setCount(++count)}>+</button>
        </>
    );
}