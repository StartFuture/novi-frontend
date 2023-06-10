import React from "react";
import { MainContainer, CardInfos } from "./styles";

import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";

export default function CreditCard(props) {
  const inputs = {
    cardName: "",
    cpf: "",
    cardNum: "",
    cardExpire: "",
    cardCVV: "",
  };

  const checkInputs = () => {
    var inpt = Object.values(inputs);

    for (let i = 0; i < inpt.length; i++) {
      if (inpt[i] === "") {
        props.setDisableBtn(true);
      } else {
        props.setDisableBtn(false);
      }
    }
  };

  return (
    <MainContainer>
      <CardInfos>
        <div className="form">
          <label htmlFor="cardName">Nome do titular</label>
          <input
            type="text"
            id="cardName"
            placeholder="Digite aqui"
            onKeyUp={(e) => {
              inputs.cardName = e.target.value;
              checkInputs();
            }}
          />
        </div>
        <div className="form">
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            placeholder="Digite aqui"
            onKeyUp={(e) => {
              inputs.cpf = e.target.value;
              checkInputs();
            }}
          />
        </div>
        <div className="form">
          <label htmlFor="cardNum">Número do cartão</label>
          <input
            type="text"
            id="cardNum"
            placeholder="Digite aqui"
            onKeyUp={(e) => {
              inputs.cardNum = e.target.value;
              checkInputs();
            }}
          />
        </div>
        <div className="formWrapper">
          <div className="form">
            <label htmlFor="cardExpire">Data da validade</label>
            <input
              type="text"
              id="cardExpire"
              placeholder="Digite aqui"
              onKeyUp={(e) => {
                inputs.cardExpire = e.target.value;
                checkInputs();
              }}
            />
          </div>
          <div className="form">
            <label htmlFor="cardCVV">CVV</label>
            <input
              type="text"
              id="cardCVV"
              placeholder="Digite aqui"
              onKeyUp={(e) => {
                inputs.cardCVV = e.target.value;
                checkInputs();
              }}
            />
          </div>
        </div>
        <div>
          <label>Quantidade de parcelas</label>
          <DropdownList
            data={["1x", "2x"]}
            placeholder="Selecione aqui"
            containerClassName="dropdown"
          />
        </div>
      </CardInfos>
    </MainContainer>
  );
}
