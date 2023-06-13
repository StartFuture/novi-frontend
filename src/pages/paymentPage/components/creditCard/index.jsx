import React, { useState } from "react";
import { MainContainer, CardInfos } from "./styles";

import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";

export default function CreditCard(props) {
  const [installmentsValue, setInstallmentsValue] = useState("1x");

  const inputs = {
    cardName: "",
    cpf: "",
    cardNum: "",
    cardExpire: "",
    cardCVV: "",
    installments: installmentsValue,
  };

  const getInstallments = () => {
    const qtdInstallments = [
      "1x",
      "2x",
      "3x",
      "4x",
      "5x",
      "6x",
      "7x",
      "8x",
      "9x",
      "10x",
      "11x",
      "12x",
    ];
    return qtdInstallments;
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
    console.log(inputs);
  };

  const [qtdInstallments, setQtdInstallments] = useState(getInstallments());

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
            data={qtdInstallments}
            value={installmentsValue}
            onChange={(nextValue) => setInstallmentsValue(nextValue)}
            placeholder="Selecione aqui"
            containerClassName="dropdown"
          />
        </div>
      </CardInfos>
    </MainContainer>
  );
}
