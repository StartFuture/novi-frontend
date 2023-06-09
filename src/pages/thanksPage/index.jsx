import React from "react";
import { MainContainer } from "./styles";
import { NoviLogo } from "../../components/noviLogo";

export default function Thanks() {
  return (
    <MainContainer>
      <div>
        <h1><NoviLogo /></h1>
        <p>Viagem paga com sucesso !</p>
      </div>
    </MainContainer>
  );
}
