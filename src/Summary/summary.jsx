import React from "react";
import { Pie } from "react-chartjs-2";
import "./summary.css";

import { Chart, ArcElement,Tooltip } from "chart.js";
Chart.register(ArcElement,Tooltip);

const Summary = ({ questionsData, selectedAnswers, name, timeSpent }) => {
  const questions = questionsData[0].questions;
  const skillCounts = {};
  questionsData[0].questions.forEach((question, index) => {
    const selectedAnswer = selectedAnswers[index];
    const skill = question.skill;
    if (skillCounts.hasOwnProperty(skill)) {
      if (selectedAnswer === question.answer) {
        skillCounts[skill] += 1;
      }
    } else {
      skillCounts[skill] = selectedAnswer === question.answer ? 1 : 0;
    }
  });
  const skills = Object.keys(skillCounts);
  const counts = Object.values(skillCounts);
  const data = {
    labels: skills,
    datasets: [
      {
        data: counts,
        backgroundColor: [
          "rgb(255, 140, 113)",
          "rgb(255, 189, 51)",
          "rgb(51, 255, 87)",
          "rgb(51, 255, 189)",
          "rgb(253, 225, 79   )",
          // Add more colors if needed
        ],
        borderColor: [
          "rgb(255, 140, 113)",
          "rgb(255, 189, 51)",
          "rgb(51, 255, 87)",
          "rgb(51, 255, 189)",
          "rgb(253, 225, 79  )",
          // Add more colors if needed
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataIndex = context.dataIndex;
            const skill = skills[dataIndex];
            const count = (counts[dataIndex]/questions.length)*100;
            return `${skill}: ${count}%`;
          },
        },
      },
    },
  };
  

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
  const score = (scorePercent / 100) * questions.length;

  return (
    <div>
      <div className="summary">
        <h1>Assessment Summary</h1>
        <div className="test_details">
          <div className="user_details">
            <h3>Name: <span>{name}</span></h3>
            <h3>Score: <span>{score} / 25</span></h3>
          </div>

          <div className="user_details">
            <h3>Time taken: <span> {timeSpent} sec </span></h3>
            <h3>Score Percentage: <span>{scorePercent} %</span></h3>
          </div>
        </div>

        <div className="analysis">
          <div className="analysis_chart">
            <Pie data={data} options={options} />
          </div>

          <div className="analysis_table">
            <table>
              <tbody>
                <tr className="table_head">
                  <td>Skills</td>
                  <td>Correct Answer</td>
                </tr>
                {Object.entries(skillCounts).map(([skills, count]) => (
                  <tr key={skills}>
                    <td>{skills}</td>
                    <td>{count}</td>
                  </tr>
                ))}

                <tr className="total">
                  <td>Total</td>
                  <td>{score}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <h2>Score Percentage: {score.correctPercentage}</h2> */}
        <div className="sumQu">
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                    Question {index + 1}: {question.question}
                  </p>
                  <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                    Skill: {question.skill}
                  </p>
                </div>
                <p
                  className={
                    question.answer === selectedAnswers[index]
                      ? "correctAns"
                      : "wrong"
                  }
                >
                  Your Answer: {selectedAnswers[index]}
                </p>
                <p
                  className={
                    question.answer !== selectedAnswers[index]
                      ? "correctAns"
                      : "inactive"
                  }
                >
                  Correct Answer: {question.answer}
                </p>
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
