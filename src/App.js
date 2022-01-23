

import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

function App() {

  const [board, setBoard]= useState([
    1, 1, 1, 1, 1, null, null, null, null, 1,
    null, null, null, null, null, null, null, null, null, 1,
    null, null, null, null, null, null, null, null, null, 1,
    null, null, null, null, null, null, null, null, null, 1,
    null, null, null, null, null, null, null, null, null, 1,
    1, null, null, 1, 1, null, null, null, null, null,
    1, null, null, null, null, null, null, null, null, null,
    1, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null,
    1, 1, 1, 1, null, null, null, null, null, null
  ])


  return (
    <div className="App">
      <h1>Battleship</h1>
      <GameBoard board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
