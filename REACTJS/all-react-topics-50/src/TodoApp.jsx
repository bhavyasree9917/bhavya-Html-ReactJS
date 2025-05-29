import React, { useReducer, useState } from 'react';

// Reducer Function
function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text }];
    case 'remove':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  const handleAdd = () => {
    dispatch({ type: 'add', text });
    setText('');
  };

  return (
    <div>
      <h2>Todos</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp