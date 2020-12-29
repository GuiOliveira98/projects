import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cursor } from "./Cursor";

function App() {
  return (
    <div className="App" style={{ cursor: "none" }}>
      <header className="App-header" style={{ height: 2000 }}>
        <img src={logo} className="App-logo" alt="logo" />
        {Math.random()}
      </header>
      <Cursor />
    </div>
  );
}

export default App;
