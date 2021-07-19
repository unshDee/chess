const { Chess } = require("chess.js");
const express = require("express");
const app = express();
const port = 3000;

const validate = (FEN, play) => {
  let chess = new Chess(FEN);
  if (chess.move(play)) {
    if (chess.game_over()) {
      if (chess.in_checkmate()) return [1, true];
      return [2, true];
    }
    return [0, true];
  }
  return [0, false];
};

app.get("/", (req, res) => {
  const { fen, play } = req.query;
  console.log(validate(fen, play));
  
});

app.get("*", (req, res) => {
  console.log("Nothing");
});

app.listen(port, () => {
  console.log(`Currently listening on: http://localhost:${port}`);
});
