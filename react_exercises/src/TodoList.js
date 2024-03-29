import React from 'react';
import PropTypes from 'prop-types';

// Lifting State Up 1 a-g
const TodoList = ({ todos, deleteTodo, editTodo }) => {
    return (
        <React.Fragment>
            <h2>All Todos</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.todoText} <span style={{ fontSize: "smaller" }}>
                        <a href="/#" onClick={(e) => { e.preventDefault(); deleteTodo(todo.id) }}> (delete, </a>
                        <a href="/#" onClick={(e) => { e.preventDefault(); editTodo(todo.id) }}> edit) </a>
                    </span>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
};
export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.array
}



