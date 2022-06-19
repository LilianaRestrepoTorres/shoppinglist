import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(){
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <header className="App-header">
        <img src={logo} alt="" className="App-logo" />
        <p>This is a Shopping List App!</p>

      </header>
    </div>
    
  );
}


export default App;