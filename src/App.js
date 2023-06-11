import { useState } from "react";
import "./App.css";
import Register from "./Register/register";
import Assignment from "./Assignment/assignment";
import questionsData from "./questionsData";
import Summary from "./Summary/summary";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAssignStarted, setIsAssignStarted] = useState(false);
  const [isAssignFinished, setIsAssignFinished] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  console.log(selectedAnswers.length);

  const handleStartAssignment = (name, email) => {
    console.log(isAssignFinished, isAssignStarted);
    setName(name);
    setEmail(email);
    setIsAssignStarted(true);
  };
  const handleFinishAssignment = (answers) => {
    setSelectedAnswers(answers);
    setIsAssignStarted(false);
    setIsAssignFinished(true);
  };
  return (
    <div className="App">
      {/* <Summary questionsData={questionsData} selectedAnswers={selectedAnswers} name={name}  ></Summary> */}
      {isAssignFinished ? (
        <Summary
          questionsData={questionsData}
          selectedAnswers={selectedAnswers}
          name={name}
        ></Summary>
      ) : (
        <>
          {isAssignStarted ? (
            <Assignment
              questionsData={questionsData}
              onFinishAssessment={handleFinishAssignment}
            ></Assignment>
          ) : (
            <Register onStartAssignment={handleStartAssignment}></Register>
          )}
        </>
      )}
    </div>
  );
}

export default App;
