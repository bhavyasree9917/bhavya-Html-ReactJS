
const TodoList = ({ tasks }) => (
  <ul>
    {tasks.map((task, idx) => (
      <li key={idx}>{task}</li>
    ))}
  </ul>
);

export default TodoList;
