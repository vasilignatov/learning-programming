// import { useEffect } from 'react'
import './TodoItem.css';

export default function TodoItem({
    todo,
    onDelete,
    onClick
}) {

    // useEffect(() => {
    //     console.log(todo.id + ' Mounted');

    //     return () => {
    //         console.log(todo.id + ' Unmounted');
    //     }
    // }, []);

    return (
        <li
            onClick={() => onClick(todo.id)}
            className={todo.isDone ? 'todo-item-done' : ''} >
            { todo.text}
            < button onClick={(ev) => onDelete(ev, todo.id)}>X</button>
        </li >
    )
}