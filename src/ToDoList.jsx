import React from  "react";

const ToDoList = (props) => {
    return (
      <div className="todo_style">
       <i className="fa fa-times delete" onClick={()=>{
            props.onSelect(props.id);
       }}></i>
       <li>{props.item}</li>
      </div>
    );

}
export default ToDoList;
