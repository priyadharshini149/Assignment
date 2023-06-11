import React from "react";
import "./summary.css";

const Summary = ({ questionsData, selectedAnswers, name,timeSpent }) => {
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
  const scorePercent = calcScore();
  const score=(scorePercent/100)*questions.length


  return (
    <div>
      <div className="summary">
        <h1>Assessment Summary</h1>
        <div className="test_details">
        <div className="user_details">
        <h3>Name: {name}</h3>
        <h3>Score: {score} / 25</h3>
      
        </div>
        <div className="user_details">
       
        <h3>Time taken: {timeSpent} sec</h3>
        <h3>Score Percentage: {scorePercent} %</h3>
        </div>
        </div>
        
        {/* <h2>Score Percentage: {score.correctPercentage}</h2> */}
        <div className="sumQu">

        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <p>Question {index+1}: {question.question}</p>
              <p className={question.answer===selectedAnswers[index]?"correctAns":"wrong"}>Your Answer: {selectedAnswers[index]}</p>
              <p className={question.answer!==selectedAnswers[index]?"correctAns":"inactive"}>Correct Answer: {question.answer}</p>
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
