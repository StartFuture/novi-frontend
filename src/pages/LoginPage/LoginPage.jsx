import React, { useState } from "react";
import validator from "validator";
import isEmail from "validator/lib/isEmail";

const LoginPage = () => {
  //Variables, constants, getters and setter
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordError, setpasswordError] = useState("");
  const [inputsError, setInputsError] = useState("");

  //Handling event on subtmit button
  const handleSubmit = (e) => {
    e.preventDefault();

    //Checking if is a valid email and a strong password
    if (validator.isEmail(email) && validator.isStrongPassword(password)) {
      console.log({ email, password });
      setEmailError("Email Valido");
      setpasswordError("Senha Forte");
    } else {
      setEmailError("Email Invalido");
      setpasswordError("Senha Fraca");
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
          <input type="checkbox" name="togglePassword" id="togglePassword" />
          <small>{passwordError}</small>
        </div>
        <small>{inputsError}</small>
        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
};

export default LoginPage;
