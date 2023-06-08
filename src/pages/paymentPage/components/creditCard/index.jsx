import React from "react";
import { MainContainer, CardInfos } from "./styles";

export default function CreditCard() {
  

  return (
    <MainContainer>
      <CardInfos>
        <div className="form">
          <label htmlFor="cardName">Nome do titular</label>
          <input type="text" id="cardName" placeholder="Digite aqui" />
        </div>
        <div className="form">
          <label htmlFor="cardName">CPF</label>
          <input type="text" id="cardName" placeholder="Digite aqui" />
        </div>
        <div className="form">
          <label htmlFor="cardName">Número do cartão</label>
          <input type="text" id="cardName" placeholder="Digite aqui" />
        </div>
        <div className="formWrapper">
          <div className="form">
            <label htmlFor="cardName">Data da validade</label>
            <input type="text" id="cardName" placeholder="Digite aqui" />
          </div>
          <div className="form">
            <label htmlFor="cardName">CVV</label>
            <input type="text" id="cardName" placeholder="Digite aqui" />
          </div>
        </div>
        <div className="form">
          <label htmlFor="cardName">Quantidade de parcelas</label>
          <input type="text" id="cardName" placeholder="Digite aqui" />
        </div>
      </CardInfos>
    </MainContainer>
  );
}
