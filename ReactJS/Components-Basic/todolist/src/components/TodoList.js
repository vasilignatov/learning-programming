import TodoListItem from "./TodoListItem.js";

export default function ToDoList() {
    return (
        <ul>
            <TodoListItem color="red">Clean you room</TodoListItem>
            <TodoListItem color="green">Go shoping</TodoListItem>
            <TodoListItem color="yellow">Learn React</TodoListItem>
            <TodoListItem color="blue">Learn class components</TodoListItem>
        </ul>
    );
}