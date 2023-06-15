import React, { useState } from "react";

import { FormStyled } from "./styles";

import Title from "../../../../components/title";
import WrapperCheckbox from "../wrapperCheckbox";
import { acceptAll } from "../acceptAll";
import { rmAcceptAll } from "../rmAcceptAll";
import SecNameEmail from "../sectionNameEmailUser";

import { useNavigate } from "react-router-dom";

import { api } from "../../../../services/Api";

export default function Form() {
  const navigate = useNavigate();

  const [noviNews, setNoviNews] = useState(false);
  const [shareData, setShareData] = useState(false);
  const [termConds, setTermConds] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  const handleChange = () => {
    let acceptAll = document.getElementById("acceptAll");

    if (acceptAll.checked == true) {
      setNoviNews(true);
      setShareData(true);
      setTermConds(true);
    } else {
      setNoviNews(false);
      setShareData(false);
      setTermConds(false);
    }
    setDisableBtn(termConds);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const address = JSON.parse(sessionStorage.getItem("address"));
    const user = JSON.parse(sessionStorage.getItem("user"));

    user.news = noviNews;
    user.share_data = shareData;
    user.info_conditions = termConds;

    const form_values = {
      address: address,
      user: user,
    };

    console.log({ user, address });

    api.post("/user/create_user", form_values).catch((err) => {
      console.log("error: " + err);
    });

    navigate("/");
  };

  return (
    <FormStyled id="termsConditionsForm">
      <SecNameEmail />
      <div className="termsConditions">
        <Title>Termos e condições</Title>
        <p>
        Bem-vindo aos Termos e Condições da nossa empresa Novi. Ao utilizar nossos serviços, você concorda com os seguintes termos. Por favor, leia atentamente as cláusulas a seguir: <br/><br/>

        1. Reservas e Pagamentos<br/>
        1.1. Todas as reservas estão sujeitas à disponibilidade e confirmação.<br/>
        1.2. Para efetuar uma reserva, é necessário o pagamento integral ou um depósito não reembolsável, conforme indicado no momento da reserva.<br/>
        1.3. Os pagamentos podem ser feitos por meio de métodos aceitos pela empresa, como cartão de crédito, transferência bancária ou qualquer outra forma autorizada.<br/>
        1.4. Caso ocorram alterações nas taxas, impostos ou câmbio após a reserva, nos reservamos o direito de ajustar o valor final.<br/><br/>

        2. Cancelamentos e Reembolsos<br/>
        2.1. Cancelamentos feitos pelo cliente estão sujeitos a taxas de cancelamento, conforme descrito nas políticas de cancelamento da empresa.<br/>
        2.2. Em alguns casos, pacotes de viagem podem ter políticas de cancelamento mais restritivas, especialmente para reservas em períodos de alta demanda ou tarifas não reembolsáveis. Tais políticas serão informadas no momento da reserva.<br/>
        2.3. Reembolsos estão sujeitos aos termos e condições dos fornecedores de serviços, como hotéis, companhias aéreas e operadoras de turismo. Faremos o possível para auxiliá-lo na obtenção de reembolsos, mas não podemos garantir a restituição total em casos de cancelamento.<br/><br/>

        3. Responsabilidades<br/>
        3.1. A empresa não se responsabiliza por quaisquer perdas, danos, lesões ou atrasos decorrentes de circunstâncias além do nosso controle, tais como condições climáticas, problemas técnicos, ações governamentais, fechamentos de fronteiras ou quaisquer eventos de força maior.<br/>
        3.2. É responsabilidade do cliente fornecer informações precisas e completas no momento da reserva. A empresa não se responsabiliza por quaisquer problemas decorrentes de informações incorretas ou incompletas fornecidas pelo cliente.<br/>
        3.3. É recomendado que o cliente adquira um seguro de viagem adequado que cubra despesas médicas, perda de bagagem e cancelamento de viagem. A empresa não se responsabiliza por tais eventualidades.<br/><br/>

        4. Alterações de Itinerário<br/>
        4.1. A empresa se reserva o direito de fazer alterações no itinerário, caso seja necessário, devido a circunstâncias imprevistas ou por razões operacionais.<br/>
        4.2. Faremos o possível para notificar o cliente sobre quaisquer alterações significativas antes da partida, mas não nos responsabilizamos por quaisquer custos adicionais decorrentes dessas alterações.<br/><br/>

        5. Documentação de Viagem<br/>
        5.1. É responsabilidade do cliente garantir que possua os documentos de viagem necessários, como passaporte válido, visto, carteira de identidade, vacinas, entre outros, de acordo com os requisitos do destino. A empresa não se responsabiliza por quaisquer problemas decorrentes de documentação inadequada ou incompleta.<br/><br/>

        6. Direitos Autorais e Propriedade
        </p>
      </div>
      <div className="formInputs">
        <div className="formCheckbox">
          <input
            type="checkbox"
            name="acceptAll"
            id="acceptAll"
            onClick={acceptAll}
            onChange={handleChange}
          />
          <label htmlFor="acceptAll">Aceito todos os termos</label>
        </div>
        <WrapperCheckbox>
          <div className="formCheckbox">
            <input
              type="checkbox"
              name="acceptTerm"
              id="noviNews"
              onClick={rmAcceptAll}
              onChange={(e) => {
                setNoviNews(noviNews == false ? true : false);
              }}
            />
            <label htmlFor="noviNews">
              Você deseja receber novidades sobre a NOVI ?
            </label>
          </div>
          <div className="formCheckbox">
            <input
              type="checkbox"
              name="acceptTerm"
              id="acceptUseData"
              onClick={rmAcceptAll}
              onChange={(e) => {
                setShareData(shareData == false ? true : false);
              }}
            />
            <label htmlFor="acceptUseData">
              Aceito que utilizem os meus dados informados
            </label>
          </div>
          <div className="formCheckbox">
            <input
              type="checkbox"
              name="acceptTerm"
              id="acceptTermsConditions"
              onClick={rmAcceptAll}
              onChange={(e) => {
                setTermConds(termConds == false ? true : false);
                setDisableBtn(termConds);
              }}
            />
            <label htmlFor="acceptTermsConditions">
              Aceito os termos e condições
            </label>
          </div>
        </WrapperCheckbox>
        <div>
          <input
            id="submit"
            type="submit"
            value="Continuar"
            onClick={handleSubmit}
            style={{ backgroundColor: disableBtn ? "grey" : "" }}
            disabled={disableBtn}
          />
        </div>
        </div>
    </FormStyled>
  );
}
