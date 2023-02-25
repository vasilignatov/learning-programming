
export default function ToDoListItem(props) {
    let color = 'black';

    if (props.children % 2 == 0) {
        color = 'blue';
    } else {
        color = 'red';
    }

    return <li style={{ color }}>{props.children}</li>
}