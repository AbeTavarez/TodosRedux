import React, { useState } from "react";

const TodoItem = ({ todo }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3>{todo.title}</h3>
      {todo.completed ? <h4>Completed</h4> : <h4>Not Completed</h4>}
    </div>
  );
};

export default TodoItem;
