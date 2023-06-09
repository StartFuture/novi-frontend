import React from "react";
import { BackgroundImage, Content, MainContainer } from "./styles";

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
          </div>
        </Content>
      </div>
    </MainContainer>
  );
}
