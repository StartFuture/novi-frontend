import React from "react";

import { FormStyled } from "./styles";

import Title from "../../../../components/title";
import WrapperCheckbox from "../wrapperCheckbox";
import { acceptAll } from "../acceptAll";
import { rmAcceptAll } from "../rmAcceptAll";

import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Form() {

  const location = useLocation();
  const user = location.state.user;
  const address = location.state.address;

  const handleSubmit = (e) => {
    e.preventDefault();

    user.news = document.getElementById("noviNews").checked;
    user.info_conditions = document.getElementById("acceptTermsConditions").checked;
    user.accept_use_data = document.getElementById("acceptUseData").checked;

    const formData = new FormData();
  
    formData.append("address", address);
    formData.append("user", user);

    axios
        .post("http://127.0.0.1:8000/user", formData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

    console.log("---------------------------------------------");
  } 

  return (
    <FormStyled id="termsConditionsForm">
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
