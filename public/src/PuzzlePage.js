import React, { useEffect, useState } from "react";
import PuzzleBoard from "./PuzzleBoard";
import axios from "axios";

function PuzzlePage() {
  const [puzzle, setPuzzle] = useState(null);

  useEffect(() => {
    fetchPuzzle();
  }, []);

  function fetchPuzzle() {
    axios
      .get("https://lichess-puzzle-api.vercel.app/api/puzzle")
      .then((res) => {
        setPuzzle(res.data);
      });
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {puzzle ? (
        <PuzzleBoard puzzle={puzzle} onNext={fetchPuzzle} />
      ) : (
        <div>Yükleniyor...</div>
      )}
    </div>
  );
}

export default PuzzlePage;
