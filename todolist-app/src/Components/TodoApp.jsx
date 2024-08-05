import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import "./Todo.css";

const initialState = [
  {
    userId: 1,
    id: 1,
    title: "MERN Full Stack",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "JavaScript",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "Mathematics",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "Computer Science",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "Automation Testing",
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
    <div className="todo-app">
      <header className="todo-header">
        <h1 className="todo-logo">Todo List</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search List" />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </header>

      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        saveTodo={saveTodo}
      />
      <footer className="todo-footer">To do List App</footer>
    </div>
  );
}

export default TodoApp;
