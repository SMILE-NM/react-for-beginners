import { useState } from "react";
import "./index.scss";
import Game from "./components/Game";
import Result from "./components/Result";

const questions = [
  {
    title: "What is React?",
    variants: ["a library", "a framework", "an application"],
    correct: 0,
  },
  {
    title: "What is a component?",
    variants: [
      "an application",
      "a part of an application or webpage",
      "something I don't know what it is",
    ],
    correct: 1,
  },
  {
    title: "What is JSX?",
    variants: [
      "It's simple HTML",
      "It's a function",
      "It's similar to HTML but allows executing JS code",
    ],
    correct: 2,
  },
];

const questionsLength = questions.length;

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }

    setStep(step + 1);
  };

  const reset = () => {
    setCorrect(0);
    setStep(0);
    console.log("Reset");
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          questionsLength={questionsLength}
        />
      ) : (
        <Result
          correct={correct}
          reset={reset}
          questionsLength={questionsLength}
        />
      )}
    </div>
  );
}

export default App;
