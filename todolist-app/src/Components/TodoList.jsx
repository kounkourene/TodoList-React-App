import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo, saveTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          saveTodo={saveTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
