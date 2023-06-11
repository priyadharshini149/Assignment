import React from "react";
import "./summary.css";

const Summary = ({ questionsData, selectedAnswers, name }) => {
  const questions = questionsData[0].questions;

  const calcScore = () => {
    let correctAnswer = 0;

    questions.forEach((question, index) => {
      const selectedAns = selectedAnswers[index];
      console.log(selectedAns);
      if (selectedAns === question.answer) {
        correctAnswer++;
      }
    });
    const correctPercentage = (correctAnswer / questions.length) * 100;
    return correctPercentage;
  };
  const score = calcScore();

  return (
    <div>
      <div className="summary">
        <h1>Assessment Summary</h1>
        <h2>Name: {name}</h2>
        <h2>Score: {score}%</h2>
        {/* <h2>Score Percentage: {score.correctPercentage}</h2> */}
        <div className="sumQu">

        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <p>Question {index+1}: {question.question}</p>
              <p className={question.answer===selectedAnswers[index]?"correct":"wrong"}>Your Answer: {selectedAnswers[index]}</p>
              <p style={{color:"green"}}>Correct Answer: {question.answer}</p>
              <br></br>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Summary;
