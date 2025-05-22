import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>My Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp
