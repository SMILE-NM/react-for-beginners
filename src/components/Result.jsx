import React from "react";

function Result({ correct, reset, questionsLength }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt=""
      />
      <h2>{`You guessed ${correct} answers out of ${questionsLength}`}</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}

export default Result;
