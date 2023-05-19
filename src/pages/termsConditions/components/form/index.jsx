import React from "react";

import { FormStyled } from "./styles";

import Title from "../../../../components/title";
import WrapperCheckbox from "../wrapperCheckbox";
import { acceptAll } from "../acceptAll";
import { rmAcceptAll } from "../rmAcceptAll";
import SecNameEmail from "../sectionNameEmailUser";

import { useNavigate } from "react-router-dom";

import { api } from "../../../../services/Api";

import { useNavigate } from "react-router-dom";

import { api } from "../../../../services/Api";

export default function Form() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const address = JSON.parse(sessionStorage.getItem('address'));
    const user = JSON.parse(sessionStorage.getItem('user'));

    user.news = document.getElementById("noviNews").checked;
    user.info_conditions = document.getElementById("acceptTermsConditions").checked;
    // user.share_data = document.getElementById("acceptUseData").checked;

    if(address.complements || address.complements === ""){
      address.complements = null
    }

    const form_values = {
      "address": address,
      "user": user,
    }

    api.post("/user/user", form_values)
      .catch((err) => {
        console.log("error: " + err);
    });

    navigate('/');
  } 

  return (
    <FormStyled id="termsConditionsForm">
        <SecNameEmail/>
      <div>
        <Title>Termos e condições</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nisi non sem mauris eget. Amet
          semper ultricies dui nunc duis aliquet dolor imperdiet dictum. Nisi
          cras aliquet sollicitudin proin. Imperdiet lacus ultrices cursus dolor
          egestas euismod non laoreet consequat. Porttitor nascetur sagittis sit
          pellentesque. Sed lectus blandit in tortor tellus ac arcu ornare id.
          Fringilla turpis posuere blandit vitae in turpis elementum. Sed lectus
          blandit in tortor tellus ac arcu ornare id. Fringilla turpis posuere
          blandit vitae in turpis elementum.
        </p>
      </div>
      <div className="formCheckbox">
        <input type="checkbox" name="acceptAll" id="acceptAll" onClick={acceptAll}/>
        <label htmlFor="acceptAll">Aceito todos os termos</label>
      </div>
      <WrapperCheckbox>
        <div className="formCheckbox">
          <input type="checkbox" name="acceptTerm" id="noviNews" onClick={rmAcceptAll}/>
          <label htmlFor="noviNews">
            Você deseja receber novidades sobre a NOVI ?
          </label>
        </div>
        <div className="formCheckbox">
          <input type="checkbox" name="acceptTerm" id="acceptUseData" onClick={rmAcceptAll}/>
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
          />
          <label htmlFor="acceptTermsConditions">
            Aceito os termos e condições
          </label>
        </div>
      </WrapperCheckbox>
      <div>
        <input id="submit" type="submit" value="Continuar" onClick={handleSubmit}/>
      </div>
    </FormStyled>
  );
}
