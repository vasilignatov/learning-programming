import './App.css';
import ToDoList from './components/TodoList.js';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>
      </header>

      <main>
        <h2>Tasks</h2>

        <ToDoList />

      </main>

      <footer>
        <p>All rights reserved &copy;</p>
      </footer>
    </div>
  );
}
