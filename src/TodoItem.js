import React from "react";

const TodoItem = ({ name, completed, onDelete, onUpdate }) => (
  <li>
    <span
      onClick={onUpdate}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {name}
    </span>
    <span onClick={onDelete}> X </span>
  </li>
);
export default TodoItem;
