import React, { useState } from "react";

import { MainContainer, LeftContent, Content, PaymentMethods } from "./styles";
import ButtonBack from "./components/buttonBack";
import Pix from "./components/pix";
import CreditCard from "./components/creditCard";

export default function PaymentPage() {
  const [showCardInfos, setShowCardInfos] = useState(false);
  const [showPixInfo, setShowPixInfo] = useState(false);
  const toggleCardInfos = () => {
    setShowCardInfos(true);
    setShowPixInfo(false);
  };
  const togglePixInfo = () => {
    setShowPixInfo(true);
    setShowCardInfos(false);
  };

  return (
    <MainContainer>
      <LeftContent>
        <ButtonBack />
      </LeftContent>
      <Content>
        <h2>Como deseja pagar ?</h2>
        <div className="travelInfo">
          <div>
            <h3>Rio de Janeiro</h3>
            <ul>
              <li>Ida - Avião</li>
              <li>Kart Outdoor</li>
              <li>Restaurante - Paris 6</li>
              <li>Volta - Avião</li>
            </ul>
          </div>
          <div>
            <h3>Total a pagar</h3>
            <p>R$ 5.000,00</p>
          </div>
        </div>
        <PaymentMethods>
          <div className="methods">
            <label htmlFor="creditCard" onClick={toggleCardInfos}>
              <div className="formCheckbox">
                <div className="customBtn">
                  <input type="radio" id="creditCard" name="paymentMethod" />
                  <div className="checkmark">
                    <span />
                  </div>
                </div>
                <div>
                  <div className="checkboxContent">
                    <h3>Cartão de Crédito</h3>
                  </div>
                </div>
              </div>
              <span>{showCardInfos ? <CreditCard /> : null}</span>
            </label>
          </div>
          <div className="methods">
            <label htmlFor="pix" onClick={togglePixInfo}>
              <div className="formCheckbox">
                <div className="customBtn">
                  <input type="radio" id="pix" name="paymentMethod" />
                  <div className="checkmark">
                    <span />
                  </div>
                </div>
                <div>
                  <div className="checkboxContent">
                    <h3>PIX</h3>
                  </div>
                </div>
              </div>
              <span>{showPixInfo ? <Pix /> : null}</span>
            </label>
          </div>
        </PaymentMethods>
      </Content>
    </MainContainer>
  );
}
