import React from "react";
import { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => { 
  const [Items, setItems] = useState([]);
  const [inputList, setInputList] = useState("");
  var itemEvent = (event) => {
     setInputList(event.target.value);
  }; 
  const clickEvent = (event) =>{
    document.getElementById("text").value = "";
    setInputList("");
    if(inputList === "") return;
    setItems([...Items, inputList]);
  }
  const deleteItems = (id) => {
    console.log("deleted");
    console.log(id);
    //delete index
    setItems((oldItems) => {
      return oldItems.filter((arr, index) => {
        return index !== id;
      });
    }
    );
  }
return (
  <>
    <div className="main-div">
      <h1>To-Do List</h1>
      <div className="centre-div">
        <input
          type="text"
          id="text"
          placeholder="Add an item"
          onChange={itemEvent}
        />
        <i className="fa fa-solid fa-plus plus" onClick={clickEvent}> </i>
        <br />
        <ol>
          {Items.map((item, key = 0) => {
            return (
              <ToDoList key={key} id={key} item={item} onSelect={deleteItems} />
            );
          })}
        </ol>
      </div>
    </div>
  </>
);
}

export default App;
