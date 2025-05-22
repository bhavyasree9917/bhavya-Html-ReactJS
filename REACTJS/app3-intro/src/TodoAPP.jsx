import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
function TodoApp() {
    const [todos, settodos] = useState([]);
    const addtodo = (newTodo) => {
        settodos([...todos, newTodo])

    }

    return <div>
        <h1>welcome to my todo app</h1>
        <TodoForm addtodo={addtodo} />
        <TodoList todos={todos} />


    </div>
}
export default TodoApp;