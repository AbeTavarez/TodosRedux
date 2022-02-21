import React, { useState, useEffect } from "react";
import axios from "axios";

const TodosList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setTodos(data.data);
  });
  return (
    <div>{todos.length > 0 && todos.map((todo) => <h4>{todo.title}</h4>)}</div>
  );
};

export default TodosList;
