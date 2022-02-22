import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import axios from "axios";

import TodoItem from "./TodoItem";
import { getTodos } from "../../actions/todosAction";


const TodosList = ({todos, getTodos}) => {
//   const [todos, setTodos] = useState([]);

  useEffect(async () => {
    // const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    getTodos();
    // setTodos(data.data);
  });
  return (
    <div>{ todos !== null && todos.length > 0 && todos.map((todo) => <TodoItem todo={todo} key={todo.id}/>)}</div>
  );
};

const mapStateToProps = state => ({
    todos: state.toDos.toDos
})

export default connect(mapStateToProps, { getTodos})(TodosList);
