import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
