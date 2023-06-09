import React from "react";
import { MainContainer, CardInfos } from "./styles";

import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";

export default function CreditCard() {
  return (
    <MainContainer>
      <CardInfos>
        <div className="form">
          <label htmlFor="cardName">Nome do titular</label>
          <input type="text" id="cardName" placeholder="Digite aqui" />
        </div>
        <div className="form">
          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" placeholder="Digite aqui" />
        </div>
        <div className="form">
          <label htmlFor="cardNum">Número do cartão</label>
          <input type="text" id="cardNum" placeholder="Digite aqui" />
        </div>
        <div className="formWrapper">
          <div className="form">
            <label htmlFor="cardExpire">Data da validade</label>
            <input type="text" id="cardExpire" placeholder="Digite aqui" />
          </div>
          <div className="form">
            <label htmlFor="cardCVV">CVV</label>
            <input type="text" id="cardCVV" placeholder="Digite aqui" />
          </div>
        </div>
        <div>
          <label>Quantidade de parcelas</label>
          <DropdownList data={[]} placeholder="Selecione aqui" containerClassName="dropdown"/>
        </div>
      </CardInfos>
    </MainContainer>
  );
}