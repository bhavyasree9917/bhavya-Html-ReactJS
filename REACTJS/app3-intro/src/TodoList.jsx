import React, { useState } from "react";
function TodoList({ todos }) {
    return <div>
        <ul>
            {todos.map((todos, index) => (
                <li key={index}>{todos}</li>

            ))}
        </ul>

    </div>
}
export default TodoList;
