import React, { useState } from "react";
import Square from "./Component/Square";
import Button from "../../Components/Button";

const CalculateWinner = (squares) => {
  // console.log(squares);
  let line = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
};

const calculateDraw = (squares) => {
  // console.log(squares);
  const res = squares.filter((item) => item == null);
  // console.log(res.length);
  return res.length ? false : true;
};

const Game = () => {
  const [Squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const isDraw = calculateDraw(Squares);
  // console.log(isDraw);
  const winner = CalculateWinner(Squares);
  let status;
  if (winner) {
    status = "winner is :-" + winner;
  } else if (!winner && isDraw) {
    console.log("draw");
    status = "Match Draw please restart";
  } else {
    status = "Next player :- " + (xTurn ? " X " : " O ");
  }

  const handleClick = (i) => {
    const nextSquare = Squares.slice();
    // console.log(Squares[i]);
    if (Squares[i] || winner) return;
    if (xTurn) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setXTurn(!xTurn);
  };

  // console.log(Squares);
  const resetGame = () => {
    setSquares(Array(9).fill(null));
  };
  return (
    <div
      style={{
        display: "flex",
        height: 600,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>Tic Tac Toe Game</h2>
      <h2>{status}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {Array(9)
          .fill()
          .map((item, index) => (
            <Square
              key={index}
              value={Squares[index]}
              onClick={() => handleClick(index)}
            />
          ))}
        {/* <Square value={Squares[0]} onClick={() => handleClick(0)} />
        <Square value={Squares[1]} onClick={() => handleClick(1)} />
        <Square value={Squares[2]} onClick={() => handleClick(2)} />
        <Square value={Squares[3]} onClick={() => handleClick(3)} />
        <Square value={Squares[4]} onClick={() => handleClick(4)} />
        <Square value={Squares[5]} onClick={() => handleClick(5)} />
        <Square value={Squares[6]} onClick={() => handleClick(6)} />
        <Square value={Squares[7]} onClick={() => handleClick(7)} />
        <Square value={Squares[8]} onClick={() => handleClick(8)} /> */}
      </div>

      {(isDraw || winner) && <Button title={"restart"} onClick={resetGame} />}
    </div>
  );
};

export default Game;
