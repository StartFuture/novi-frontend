import React, { useState } from "react";
import validator from "validator";
import "../../assets/css/LoginPage.css";

const LoginPage = () => {
  //Variables, constants, getters and setter
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordError, setPasswordError] = useState("");
  const [showPasswor, setShowPassword] = useState("block");
  const [hidePassword, setHidePassword] = useState("none");

  //Handling event on subtmit button
  const handleSubmit = (e) => {
    e.preventDefault();

    //Checkin if there are blank inputs
    if (validator.isEmpty(email) && validator.isEmpty(password)) {
      setEmailError("Por favor, insira um email válido");
      setPasswordError("Por favor, insira uma senha mais forte");
      return;
    }

    //Checking if is not a valid email
    if (!validator.isEmail(email)) {
      setEmailError("Por favor, insira um email válido");
      return;
    }
    setEmailError("");

    //Checking if is not a strong password
    if (!validator.isStrongPassword(password)) {
      setPasswordError("Por favor, insira uma senha mais forte");
      return;
    }
    setPasswordError("");
    console.log({ email, password });
  };

  //Function to toggle password view
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setShowPassword("none");
      setHidePassword("block");
    } else {
      setPasswordType("password");
      setShowPassword("block");
      setHidePassword("none");
    }
  };

  //HTML structure
  return (
    <div className="login">
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <div className="logo">
          <h1>NOVÍ</h1>
        </div>
        <div className="loginFields">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="loginEmail"
            value={email}
            placeholder="Insira o seu email aqui"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <small>{emailError}</small>
        </div>
        <div className="loginFields">
          <label htmlFor="password">Senha</label>
          <div className="passwordContent">
            <input
              type={passwordType}
              name="password"
              id="loginPassword"
              value={password}
              placeholder="Insira a sua senha aqui"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="showHidePassword">
              <svg
                onClick={togglePassword}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-eye"
                viewBox="0 0 16 16"
                display={showPasswor}
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
              <svg
                onClick={togglePassword}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-eye-slash"
                viewBox="0 0 16 16"
                display={hidePassword}
              >
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
              </svg>
            </div>
          </div>
          <small>{passwordError}</small>
        </div>
        <input className="loginSubmit" type="submit" value="Entrar" />
      </form>
    </div>
  );
};

export default LoginPage;
