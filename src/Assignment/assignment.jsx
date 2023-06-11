import React, { useState, useEffect,useCallback } from "react";
import "./assignment.css";

const Assignment = ({ questionsData, onFinishAssessment }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
 
  // const question=questionsData.questions[currentQuestion];
  const [start, setStart] = useState(false);
  const assignment = questionsData[0];
  const question = assignment.questions[currentQuestion];
  const timer=assignment.duration_minutes;
  const [remainingTime, setRemainingTime] = useState(timer * 60);

  const handleFinish = useCallback(() => {
    onFinishAssessment(selectedAnswers);
  }, [onFinishAssessment, selectedAnswers]);

  useEffect(() => {
    if (start && remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    } else if (remainingTime === 0) {
      handleFinish();
    }
  }, [remainingTime, start, handleFinish]);
  const handleAnswer = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedAnswers);
  };
  const handlePrevQu = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };
  const handleNextQu = () => {
    setCurrentQuestion((nextQuestion) => nextQuestion + 1);
  };


  const assignStart = () => {
    setStart(true);
  };

  return (
    <div className="assign">
      {start && (
        <div className={start ? "timer" : "timer-hide"}>
          <p>Time: {remainingTime}s left</p>
          <p>{start}</p>
        </div>
      )}
      <div className={start ? "description-hide" : "description"}>
        <h1>{assignment.assessmentName}</h1>
        <p>{assignment.description}</p>
        <button
          onClick={() => {
            assignStart();
          }}
        >
          Start
        </button>
      </div>
      <br></br>
      <div className={start ? "question" : "question-hide"}>
        <p>
          {currentQuestion + 1}. {question.question}
        </p>
        <ul>
          {question.options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  value={option.name}
                  checked={selectedAnswers[currentQuestion] === option.name}
                  onChange={() => handleAnswer(option.name)}
                />
                <span>{option.name}</span>
              </label>
            </li>
          ))}
        </ul>
        <div className="btn">
          {currentQuestion >= 1 && (
            <button onClick={handlePrevQu} disabled={currentQuestion === 0}>
              previous question
            </button>
          )}
          {currentQuestion === assignment.questions.length - 1 && (
            <button onClick={handleFinish}>Finish</button>
          )}

          {currentQuestion < assignment.questions.length - 1 && (
            <button
              onClick={handleNextQu}
              disabled={currentQuestion === assignment.questions.length - 1}
            >
              next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assignment;
