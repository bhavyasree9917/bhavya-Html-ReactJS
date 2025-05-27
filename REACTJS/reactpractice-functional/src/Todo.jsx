import React, { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => setTask(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTasks([...tasks, task.trim()]);
    setTask("");
  };

  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={handleSubmit}>
        <input value={task} onChange={handleChange} placeholder="Enter task" />
        <button type="submit">Add Task</button>
      </form>
      <TodoList tasks={tasks} />
      
    </div>
  );
}

export default Todo;
