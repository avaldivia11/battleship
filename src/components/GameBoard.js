import React from "react";

const GameBoard = ({ board, setBoard }) => {
  function fireTorpedo(index) {
    
    let auxBoard = [...board];
    if (auxBoard[index] === 1) {
      auxBoard[index] = 2;
    } else if (auxBoard[index] === null) {
      auxBoard[index] = 3;
    }
    setBoard(auxBoard);
    
  }

  function changeStyle(index) {
    
    if (board[index] === null || board[index] === 1) {
      return "bg-secondary";
    }
    if (board[index] === 2) {
      return "bg-danger";
    }    
    if (board[index] === 3) {
      return "bg-primary";
    }
  }


  return (
    <>
      <h1>Game Board</h1>
      <div className="board d-flex flex-wrap">
        {board.map((play, index) => {
          return (
            <div
              className={"field" + " " + changeStyle(index)}
              onClick={() => fireTorpedo(index)}
              key={index}
            >
              
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GameBoard;
