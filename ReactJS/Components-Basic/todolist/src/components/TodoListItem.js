export default function ToDoListItem(props) {
    console.log(props);
    return <li style={{ color: props.color }} >{props.children}</li>
}