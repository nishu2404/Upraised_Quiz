// components/Question.js
import React, { useState } from "react";
import { answers } from "../answers";
import nextButton from "../assets/Button.png";
const Question = ({
  score,
  totalQuestions,
  question,
  onAnswerSubmit,
  onNextQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const handleAnswerChange = (e, id) => {
    setSelectedAnswer(e.target.value);
    if (answers[id] === e.target.value) {
      score();
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      onAnswerSubmit(question.id, selectedAnswer);
      setSelectedAnswer("");
      onNextQuestion();
    } else {
      alert("Please select any one of the options");
    }
  };

  return (
    <div>
      <div className="pageBody">
        <div>
          <h2>{question.text}</h2>
        </div>
        <div>
          <ul>
            {question.options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={(e) => {
                      handleAnswerChange(e, question.id);
                    }}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <img
          className="pageFooter"
          src={nextButton}
          onClick={handleSubmitAnswer}
          alt="Next Button"
        />
      </div>
    </div>
  );
};

export default Question;
