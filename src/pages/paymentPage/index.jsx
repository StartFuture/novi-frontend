import React, { useState } from "react";

import { MainContainer, LeftContent, Content, PaymentMethods, Buttons, ButtonPrev, ButtonNext } from "./styles";
import ButtonBack from "./components/buttonBack";
import Pix from "./components/pix";
import CreditCard from "./components/creditCard";
import { useNavigate } from "react-router-dom";

import { FaRegCreditCard } from "react-icons/fa";
import { MdPix } from "react-icons/md";

export default function PaymentPage() {
  const [showCardInfos, setShowCardInfos] = useState(false);
  const [showPixInfo, setShowPixInfo] = useState(false);
  const nav = useNavigate();

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
                <div className="contentContainer">
                  <div className="checkboxContent">
                    <FaRegCreditCard fontSize={50} style={{color: "#3BB39D", marginRight: "1.8%", marginLeft: "0.2%"}}/>
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
                <div className="contentContainer">
                  <div className="checkboxContent">
                    <MdPix fontSize={50} style={{color: "#3BB39D", marginRight: "1.8%", marginLeft: "0.2%"}}/>
                    <h3>PIX</h3>
                  </div>
                </div>
              </div>
              <span>{showPixInfo ? <Pix /> : null}</span>
            </label>
          </div>
        </PaymentMethods>
        <Buttons>
          <ButtonPrev onClick={() => {nav("/home")}}>Cancelar</ButtonPrev>
          <ButtonNext onClick={() => {nav("/")}}>Prosseguir</ButtonNext>
        </Buttons>
      </Content>
    </MainContainer>
  );
}
