import React, { useState } from "react";
import "./register.css";
const Register = ({ onStartAssignment }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
        console.log(name,email);
      onStartAssignment(name, email);
    } else {
        console.log("name:"+name+"email:"+email);
      setNameError(name ? "" : "please enter your name");
      setEmailError(email ? "" : "please enter your mail id");
    }
  };

  return (
    <div className="registration">
        <div className="reg">

      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          ></input>
          <br></br>
          {nameError && <span className="error">{nameError}</span>}
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          ></input>
          <br></br>
          {emailError && <span className="error">{emailError}</span>}
        </div>
        <div>

        <button>Register</button>
        </div>
      </form>
        </div>
    </div>
  );
};

export default Register;
