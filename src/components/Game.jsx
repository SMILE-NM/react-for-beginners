import React from "react";

function Game({ question, onClickVariant, step, questionsLength }) {
  const percentage = Math.round((step / questionsLength) * 100);
  console.log(percentage);

  return (
    <div>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Game;
