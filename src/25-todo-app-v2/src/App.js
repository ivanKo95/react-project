import './App.css';
import TodoList from "./components/Todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import TodosActions from "./components/Todos/TodosActions";
import {useState} from "react";
import {v4 as uuid} from 'uuid';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuid()
        }
        setTodos([...todos, newTodo])
    }

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleTodoHandler = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id
                ? {...todo, isCompleted: !todo.isCompleted}
                : {...todo}
        ))
    }

    const resetTodosHandler = () => {
        setTodos([]);
    };

    const deleteCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) =>
            !todo.isCompleted
        ))
    }

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm
                addTodo={addTodoHandler}
            />
            {!!todos.length && <TodosActions
                resetTodos={resetTodosHandler}
                deleteCompletedTodos={deleteCompletedTodosHandler}
            />}
            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHandler}
            />
        </div>
    );
}

export default App;
