import React, { useState } from "react";
import validator from "validator";
import isEmail from "validator/lib/isEmail";

const LoginPage = () => {
  //Variables, constants, getters and setter
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordError, setPasswordError] = useState("");

  //Handling event on subtmit button
  const handleSubmit = (e) => {
    e.preventDefault();

    //Checkin if there are blank inputs 
    if (validator.isEmpty(email) && validator.isEmpty(password)) {
        setEmailError("Por favor, insira um email válido");
        setPasswordError("Por favor, insira uma senha mais forte");
        return
    }

    //Checking if is not a valid email
    if (!validator.isEmail(email)) {
        setEmailError("Por favor, insira um email válido");
        return
    }
    setEmailError("");

    //Checking if is not a strong password
    if (!validator.isStrongPassword(password)){
        setPasswordError("Por favor, insira uma senha mais forte");
        return
    }
    setPasswordError("");
    console.log({email, password})
  };  

  //Function to toggle password view
  const togglePassword = () => {
    if (passwordType === "password") {
        setPasswordType("text");
    } else {
        setPasswordType("password");
    }
  };

  //HTML structure
  return (
    <div id="login">
      <form action="" id="loginForm" onSubmit={handleSubmit}>
        <div className="logo">
          <h1>NOVÍ</h1>
        </div>
        <div className="loginInputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="loginEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <small>{emailError}</small>
        </div>
        <div className="loginInputs">
          <label htmlFor="password">Senha</label>
          <input
            type={passwordType}
            name="password"
            id="loginPassword"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="checkbox" name="togglePassword" id="togglePassword" onChange={togglePassword}/>
          <small>{passwordError}</small>
        </div>
        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
};

export default LoginPage;
