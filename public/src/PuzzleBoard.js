import React, { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

function PuzzleBoard({ puzzle, onNext }) {
  const game = new Chess(puzzle.fen);
  const [history, setHistory] = useState([]);

  function handleMove(from, to) {
    const move = game.move({ from, to, promotion: "q" });
    if (move) {
      setHistory([...history, move.san]);
      if (game.history().length >= puzzle.solution.length) {
        onNext();
      }
    } else {
      game.load(puzzle.fen);
      setHistory([]);
    }
    return true;
  }

  return (
    <div>
      <h2>Az sonra yeni puzzle</h2>
      <Chessboard position={puzzle.fen} onPieceDrop={handleMove} />
      <div>
        <b>Hamleler:</b> {history.join(" ")}
      </div>
      <button onClick={onNext}>Sonraki</button>
    </div>
  );
}

export default PuzzleBoard;
