import React,{useState}from"react";
function TodoList({todos}){

    return<div>
        <ul>
        {todos.map((todos,redux)=>(
<li key={todos}>{redux}</li>

        ))}
        </ul>

    </div>
}
export default TodoList