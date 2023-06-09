import React from "react";
import { BackgroundImage, Content, MainContainer } from "./styles";
import { TailSpin } from "react-loading-icons";

export default function Loading() {
  return (
    <MainContainer>
      <div className="container">
        <BackgroundImage />
        <Content>
          <div className="contentContainer">
            <h2>Estamos finalizando o pagamento da sua viagem</h2>
            <p>
              Estamos certificando em garantir todos os detalhes da sua viagem
            </p>
            <div className="loadingIcon">
              <TailSpin stroke="#3BB29D"/>
            </div>
          </div>
        </Content>
      </div>
    </MainContainer>
  );
}
