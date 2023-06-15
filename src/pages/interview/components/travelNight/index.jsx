import React, { useRef } from "react";

import { FormStyled } from "./styles";

function TravelNight(props) {
  var formData = useRef(props.formData);
  props.setDisableBtn(
    formData.current.options.night_style == 0 ? true : false
  );

  const handler = (e) => {
    formData.current.options.night_style = Number(e.target.value);
    sessionStorage.setItem("currInterview", JSON.stringify(formData.current));
    props.setDisableBtn(false);
  };
  return (
    <FormStyled>
      <label className="formCheckbox" htmlFor="option1">
        <div className="customBtn">
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
          <div className="checkmark"><span/></div>
        </div>
        <div className="checkboxContent">
          <h3>Vida noturna animada</h3>
          <small>
            Gosto de ir em shows, musicais, baladas, etc. Quero curtir !
          </small>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option2">
        <label className="customBtn">
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
          <div className="checkmark"><span/></div>
        </label>
        <div className="checkboxContent">
          <h3>
            Gosto de ter opções para sair a noite
          </h3>
          <small>
            Se algo me chamar atenção, vou optar por incluir no meu roteiro
          </small>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option3">
        <label className="customBtn">
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
          <div className="checkmark"><span/></div>
        </label>
        <div className="checkboxContent">
          <h3>Não gostaria</h3>
          <small>Evito sair a noite durante as minhas viagens</small>
        </div>
      </label>
    </FormStyled>
  );
}

export default TravelNight;
