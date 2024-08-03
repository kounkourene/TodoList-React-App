import React, { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, saveTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    saveTodo(todo.id, newTitle);
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <>
          <button onClick={handleEditClick}>Edit</button>
          <button
            onClick={() => deleteTodo(todo.id)}
            disabled={!todo.completed}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
