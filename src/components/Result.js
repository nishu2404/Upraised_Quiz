// components/Result.js
import React from "react";
import "../style/home.css";

const Result = ({ score }) => {
  return (
    <div className="resultPage">
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score}</p>
      </div>
    </div>
  );
};

export default Result;
