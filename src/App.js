import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  function addItem(listValue) {
    console.log("this is listValue form addItem function" ,listValue);
    console.log("this is list debugging...",list);

    if (listValue) {
      const newItem = {
        id: Date.now(),
        value: listValue,
        isDone: false,
      };
      const newList = list;
      console.log("this is newList debugging...",newList);
      newList.push(newItem);
      setList(newList);
      setNewItem("");
    }
  }

  function deleteItem(id) {
    const newList = list;
    // Create an update list that skips the item that matches the id
    const updatedList = newList.filter((item) => item.id !== id);
    setList(updatedList);
  }

  function updateItem(input) {
    console.log("this is input from updateItem funtion", input);
    setNewItem(input);
  }

  return (
    <div>
      <img src={logo} alt="" width="100" height="100" className="logo" />
      <h1 className="app-title">Shopping List</h1>
      <div className="container">
        Add an Item...
        <br />
        <input
          type="text"
          className="input-text"
          placeholder="Write it here..."
          required
          // Assigning newItem state value to clear each time is added an item
          value={newItem}
          onChange={(e) => updateItem(e.target.value)}
        />
        <button
          className="add-btn"
          onClick={() => addItem(newItem)}
          disabled={!newItem.length}
        >
          Add item
        </button>
        <div className="list">
          <ul>
            {list.map((item) => {
              return (
                <li key={item.id}>
                  <input type="checkbox" name="idDone" checked={item.isDone} />
                  {item.value}
                  <button className="btn" onClick={()=> deleteItem(item.id)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
