import React, { useState } from "react";
import logo from "./icon-shopping.png";
import "./App.css";
import { FaTrash, FaPlus } from "react-icons/fa";

function App() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  function addItem(listValue) {
    console.log("this is listValue form addItem function", listValue);
    console.log("this is list debugging...", list);

    if (listValue) {
      const newItem = {
        id: Date.now(),
        value: listValue,
        isDone: false,
      };
      const newList = list;
      console.log("this is newList debugging...", newList);
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
    <div className="container">
      <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Shopping List</h1>
      </header>
      <div className="input">
        <input
          type="text"
          className="input-text"
          placeholder="Add an Item..."
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
          <FaPlus />
        </button>
      </div>
      <div className="list">
        <ul className="items">
          {list.map((item) => {
            return (
              <li key={item.id}>
                <div className="check-item"> 
                  <input type="checkbox" name="idDone" checked={item.isDone} />
                </div>
                {item.value}
                <button className="delete-btn" onClick={() => deleteItem(item.id)}>
                  <FaTrash />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
