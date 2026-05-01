import React, { useReducer, useRef } from "react";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";

const addFunction = (state, action) => {

  if(action.type == "ADD"){
    return state = [action.payload, ...state];
  }
  if(action.type == "DELETE"){
    return state.filter((item, index) => index !== action.payload)
  }
}

const TodoTask = ({state}) => {
  const targetref = useRef();
  const dateref = useRef();
  const name = useSelector((state) => state.user[0].name);
  console.log(name)

  const [add, dispatchAdd] = useReducer(addFunction, [])

  const handleClick = () => {
    const target = targetref.current.value;
    const date = dateref.current.value;

    dispatchAdd({type: "ADD", payload: {target, date}})
  }

  return (
    <div className="ToDo">
      <p className="profileIcon">{name[0]}</p>
      <h1>TODO Task</h1>

      <div className="taskRow">
        <input ref={targetref} type="text" placeholder="Enter your task" />
        <input ref={dateref} type="date" />

        <button className="editBtn">Edit</button>
        <button onClick={handleClick} className="addBtn">Add</button>
      </div>
      <hr />
      <TodoList add={add} dispatchAdd={dispatchAdd}  />
    </div>
  );
};

export default TodoTask;