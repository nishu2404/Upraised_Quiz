// components/Quiz.js
import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";
import { Link } from "react-router-dom";
import startAgainBtn from "../assets/startAgain.png";
import pageHeaderImage from "../assets/彩色.svg";
import { startQuiz, finishQuiz } from "../services/api";

// const quest = [
//   {
//     id: 1,
//     text: "What is the capital of France?",
//     options: ["London", "Madrid", "Paris", "Berlin"],
//     correctAnswer: "Paris",
//   },
//   {
//     id: 2,
//     text: "Which planet is known as the Red Planet?",
//     options: ["Mars", "Venus", "Jupiter", "Mercury"],
//     correctAnswer: "Mars",
//   },
//   {
//     id: 3,
//     text: "Who wrote the play 'Romeo and Juliet'?",
//     options: [
//       "Charles Dickens",
//       "William Shakespeare",
//       "Jane Austen",
//       "Mark Twain",
//     ],
//     correctAnswer: "William Shakespeare",
//   },
//   {
//     id: 4,
//     text: "What is the chemical symbol for gold?",
//     options: ["Go", "Au", "Ag", "Ge"],
//     correctAnswer: "Au",
//   },
//   {
//     id: 5,
//     text: "Which gas do plants absorb from the atmosphere?",
//     options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
//     correctAnswer: "Carbon Dioxide",
//   },
// ];

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("quizQuestions.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuestions(data.questions);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerSubmit = (questionId, answer) => {
    setUserAnswers({ ...userAnswers, [questionId]: answer });
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishQuiz = () => {
    setQuizFinished(true);
    console.log(score, "score");
  };

  const handleScore = () => {
    console.log(score, "score");
    setScore((prev) => prev + 1);
  };

  return (
    <div className="page">
      <img className="pageHeader" src={pageHeaderImage} />
      <div className="questions">
        {currentQuestion < questions.length ? (
          <div>
            <div className="questionNumber">
              <h1>{questions[currentQuestion].id}</h1>
              <h3>/5</h3>
            </div>
            <Question
              score={handleScore}
              question={questions[currentQuestion]}
              onAnswerSubmit={handleAnswerSubmit}
              onNextQuestion={handleNextQuestion}
            />
          </div>
        ) : (
          <>
            <Result score={score} />
            <Link to="/">
              <img
                className="pageFooter"
                src={startAgainBtn}
                onClick={handleFinishQuiz}
                alt="Next Button"
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
