import React, { useState } from "react";

import {
  MainContainer,
  LeftContent,
  Content,
  PaymentMethods,
  Buttons,
  ButtonPrev,
  ButtonNext,
} from "./styles";
import ButtonBack from "./components/buttonBack";
import Pix from "./components/pix";
import CreditCard from "./components/creditCard";
import { useNavigate } from "react-router-dom";

import { FaRegCreditCard } from "react-icons/fa";
import { MdPix } from "react-icons/md";
import { BsFillPersonFill, BsFillCalendarFill } from "react-icons/bs";

export default function PaymentPage() {
  const [showCardInfos, setShowCardInfos] = useState(false);
  const [showPixInfo, setShowPixInfo] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
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
        <div className="infos">
          <h2>Como deseja pagar ?</h2>
          <div className="travelInfo">
            <div className="travelInfoContent">
              <div className="travelInfoHeader">
                <div className="destiny">
                  <h3>Rio de Janeiro</h3>
                  <div className="travelersDate">
                    <h4>
                      <BsFillPersonFill />
                    </h4>
                    <p>2</p>
                    <h4>
                      <BsFillCalendarFill />
                    </h4>
                    <p>14</p>
                  </div>
                </div>
                <div className="value">
                  <h3>Total a pagar</h3>
                  <p>R$ 5.000,00</p>
                </div>
              </div>
              <ul>
                <li>Ida - Avião</li>
                <li>Kart Outdoor</li>
                <li>Restaurante - Paris 6</li>
                <li>Volta - Avião</li>
              </ul>
            </div>
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
                    <h4>
                      <FaRegCreditCard />
                    </h4>
                    <h3>Cartão de Crédito</h3>
                  </div>
                </div>
              </div>
              <span>{showCardInfos ? <CreditCard setDisableBtn={setDisableBtn} /> : null}</span>
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
                    <h4>
                      <MdPix />
                    </h4>
                    <h3>PIX</h3>
                  </div>
                </div>
              </div>
              <span>{showPixInfo ? <Pix setDisableBtn={setDisableBtn} /> : null}</span>
            </label>
          </div>
        </PaymentMethods>
        <Buttons>
          <ButtonPrev
            onClick={() => {
              nav("/home");
            }}
          >
            Cancelar
          </ButtonPrev>
          <ButtonNext
            disabled={disableBtn}
            style={{ backgroundColor: !disableBtn ? "" : "gray" }}
            onClick={() => {
              nav("/loading");
            }}
          >
            Prosseguir
          </ButtonNext>
        </Buttons>
      </Content>
    </MainContainer>
  );
}
