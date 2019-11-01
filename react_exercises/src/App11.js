import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList"
import NewTodo from "./NewTodo"
import uuid from "uuid/v1";


// Lifting State Up 1 a-g
function App() {
    const initialData = [
        { id: uuid(), todoText: "Wake up" },
        { id: uuid(), todoText: "Make Coffee" },
        { id: uuid(), todoText: "Drink Coffee" }
    ]
    const [todos, setTodos] = useState(initialData);
    const [newTodo, setNewTodo] = useState({ id: "", todoText: "" });
    console.log(todos)

    const addTodo = todo => {
        if (todo.id === "") {
            todo.id = uuid();
            todos.push(todo);
        } else {
            let todoToEdit = todos.find(t => t.id === todo.id);
            todoToEdit.todoText = todo.todoText;
        }
        setTodos([...todos]);
        setNewTodo({ id: "", todoText: "" })
    };

    const deleteTodo = (id) => {
        const newList = todos.filter(todo => todo.id !== id);
        setTodos([...newList]);
    }

    const editTodo = (id) => {
        const toEdit = todos.find(todo => todo.id === id);
        setNewTodo({ ...toEdit })
    }

    return (
        <div className="container outer">
            <h2 style={{ textAlign: "center", marginBottom: 25 }}> Props and Lifting State Demo </h2>
            <div className="row">
                <div className="col-6 allTodos">
                    <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
                </div>
                <div className="col-5 new-todo">
                    <NewTodo addTodo={addTodo} nextTodo={newTodo} />
                </div>
            </div>
        </div>
    );
}
export default App;
