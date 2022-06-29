import "./App.css";
import React from "react";
import PlayGround from "./components/PlayGround";
import Pointer from "./components/Pointer";

function App() {
  return (
    <div id="app" className="App">
      <h1>Memory Game</h1>
      <Pointer />
      <PlayGround />
    </div>
  );
}

export default App;