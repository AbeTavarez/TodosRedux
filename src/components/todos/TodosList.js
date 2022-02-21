import React, { useState, useEffect } from "react";
import axios from "axios";

import TodoItem from "./TodoItem";

const TodosList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setTodos(data.data);
  });
  return (
    <div>{todos.length > 0 && todos.map((todo) => <TodoItem todo={todo} key={todo.id}/>)}</div>
  );
};

export default TodosList;
