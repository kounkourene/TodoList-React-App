import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import "./Todo.css";

const initialState = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
];

function TodoApp() {
  const [todos, setTodos] = useState(initialState);

  const addTodo = (title) => {
    setTodos([{ id: Date.now(), title, completed: false }, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const saveTodo = (id, title) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        saveTodo={saveTodo}
      />
    </div>
  );
}

export default TodoApp;
