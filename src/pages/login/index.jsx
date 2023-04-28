import React, { useState } from "react";
import validator from "validator";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import "./assets/css/login.css";

import Facebook from './assets/svg/LoginFacebookIcons.svg';
import Google from './assets/svg/LoginGoogleIcon.svg';

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
      <div className="loginImage">
        <div className="loginImageBackground">
        </div>
        <p>Deixe sua viagem com a gente! #sóvai</p>
      </div>
      
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <div className="loginLogo">
          <h1>Noví</h1>
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
              <h4 ><BsFillEyeFill onClick={togglePassword} display={showPasswor}/></h4>
              <h4 ><BsFillEyeSlashFill onClick={togglePassword} display={hidePassword}/></h4>
            </div>
          </div>
          <small>{passwordError}</small>
        </div>
        <button id="btnForgotPassword">Esqueci minha senha</button>
        <input className="loginSubmit" type="submit" value="Entrar" />
        <input className="loginNewAccountSubmit" type="submit" value="Registre-se" />
        <div className="loginOtherOption">
            <span className="loginOtherOptionText"> Ou entre com </span>
        </div>
        <button className="loginFacebook" type="submit"><img src={Facebook} alt="Icone Facebook"/> Entrar com Facebook</button>
        <button className="loginGoogle" type="submit"><img src={Google} alt="Icone Google"/> Entrar com Google</button>
      </form>
    </div>
  );
};

export default LoginPage;
