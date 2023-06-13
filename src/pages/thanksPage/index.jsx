import React from "react";
import { MainContainer } from "./styles";
import { NoviLogo } from "../../components/noviLogo";
import { useNavigate } from "react-router";

export default function Thanks() {

  const nav = useNavigate()

  setTimeout(function() {
    nav("/home");
  }, 3000);

  return (
    <MainContainer>
      <div>
        <h1><NoviLogo /></h1>
        <p>Viagem paga com sucesso !</p>
      </div>
    </MainContainer>
  );
}
