import { useState } from 'react'
import './App.css'

import React from 'react'

export function Square({ value, onSquareClick }) {
  function handleOnClick() {
    console.log("clicked!");
    onSquareClick();
  }
  return (
    <button className="square" onClick={handleOnClick}>{value}</button>
  )
}


export function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null]);

  const handleOnSquareClick = (i) => {
    console.log("clicked square");
    const nextSquares = [...squares];
    nextSquares[i] = "X";
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O"
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="board-row">
        <Square onSquareClick={()=> handleOnSquareClick(0)} value={squares[0]}/>
        <Square onSquareClick={()=> handleOnSquareClick(1)} value={squares[1]}/>
        <Square onSquareClick={()=> handleOnSquareClick(2)} value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square onSquareClick={()=> handleOnSquareClick(3)} value={squares[3]}/>
        <Square onSquareClick={()=> handleOnSquareClick(4)} value={squares[4]}/>
        <Square onSquareClick={()=> handleOnSquareClick(5)} value={squares[5]}/>
      </div>
      <div className="board-row">
        <Square onSquareClick={()=> handleOnSquareClick(6)} value={squares[6]}/>
        <Square onSquareClick={()=> handleOnSquareClick(7)} value={squares[7]}/>
        <Square onSquareClick={()=> handleOnSquareClick(8)} value={squares[8]}/>
      </div>
    </>
  );
}

function App() {
  return <Board/>
}

export default App
