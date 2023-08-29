import React from "react";
import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    alert("click");
  }
  return (
    <button className="square" onClick={handleClick}></button>
  );
}
export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
