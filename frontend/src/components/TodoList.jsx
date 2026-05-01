import React from "react";

const TodoList = ({add, dispatchAdd}) => {
  return (
    <>
      {
        add.length == 0 ? <h4 style={{color: "black"}}>ADD Task</h4> :
        add.map((item, index) => (
          <div key={index} className="todoContainer">
          <div className="taskBox">{item.target}</div>
          <div className="dateBox">{item.date}</div>
          <button onClick={() => dispatchAdd({type: "DELETE", payload: index})} className="deleteBtn">Delete</button>
          </div>
        ))
      }
    </>
  );
};

export default TodoList;