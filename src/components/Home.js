import React, { useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
import "../style/home.css";
import headerImage from "../assets/Frame.png";
import quizIcon from "../assets/Group 3.svg";
import startBtn from "../assets/Start button.png";
// import { handleStartQuiz } from "../actions";

const Home = () => {
  const [questions, setQuestions] = useState([]);

  // const handleStartQuiz = () => {
  //   fetch("quizQuestions.json")
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="container">
      <img className="header" src={headerImage} alt="headerImage" />

      <img className="body" src={quizIcon} alt="QuizIcon" />

      <Link to="/quiz">
        <img
          className="footer"
          // onClick={handleStartQuiz}
          src={startBtn}
          alt="SaveButton"
        />
      </Link>
    </div>
  );
};

export default Home;
