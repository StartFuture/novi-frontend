import React, { useRef } from "react";

import { FormStyled } from "./styles";

function TravelNight({ formData }) {
  var formData = useRef(formData);

  const handler = (e) => {
    formData.current.options.night_style = e.target.value;
    sessionStorage.setItem("currInterview", JSON.stringify(formData.current));
  };
  return (
    <FormStyled>
      <label className="formCheckbox" htmlFor="option1">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optionaNight"
            id="option1"
            onChange={handler}
            value={1}
            defaultChecked={
              formData.current.options.night_style == 1 ? true : false
            }
          />
          <span className="checkmark"></span>
        </div>
        <div className="descriptionDestinyType">
          <h2 className="checkboxTitle">Vida noturna animada</h2>
          <small>
            Gosto de ir em shows, musicais, baladas, etc. Quero curtir !
          </small>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option2">
        <label className="custom-radio-btn">
          <input
            type="radio"
            name="optionaNight"
            id="option2"
            onChange={handler}
            value={2}
            defaultChecked={
              formData.current.options.night_style == 2 ? true : false
            }
          />
          <span className="checkmark"></span>
        </label>
        <div className="descriptionDestinyType">
          <h2 className="checkboxTitle">
            Gosto de ter opções para sair a noite
          </h2>
          <small>
            Se algo me chamar atenção, vou optar por incluir no meu roteiro
          </small>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option3">
        <label className="custom-radio-btn">
          <input
            type="radio"
            name="optionaNight"
            id="option3"
            onChange={handler}
            value={3}
            defaultChecked={
              formData.current.options.night_style == 3 ? true : false
            }
          />
          <span className="checkmark"></span>
        </label>
        <div className="descriptionDestinyType">
          <h2 className="checkboxTitle">Não gostaria</h2>
          <small>Evito sair a noite durante as minhas viagens</small>
        </div>
      </label>
    </FormStyled>
  );
}

export default TravelNight;
