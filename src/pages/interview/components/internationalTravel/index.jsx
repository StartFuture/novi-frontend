import React, { useRef } from "react";

import { FormStyled } from "./styles";

function InternationalTravel({ formData }) {
  var formData = useRef(formData);

  const handler = (e) => {
    formData.current.options.can_leave_country = e.target.value;
    sessionStorage.setItem("currInterview", JSON.stringify(formData.current));
  };

  return (
    <FormStyled>
      <h1 className="titleDestinyType">
        Você topa viajar para fora do seu país?
      </h1>

      <label className="formCheckbox" htmlFor="optionDestinyType1">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optionDestinyType"
            id="optionDestinyType1"
            onChange={handler}
            value={1}
            defaultChecked={
              formData.current.options.can_leave_country == 1 ? true : false
            }
          />
          <span className="checkmark"></span>
        </div>
        <div className="descriptionDestinyType">
          <h2 className="checkboxTitle">Sim</h2>
          <small>Adoraria uma viagem internacional</small>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="optionDestinyType2">
        <label className="custom-radio-btn">
          <input
            type="radio"
            name="optionDestinyType"
            id="optionDestinyType2"
            onChange={handler}
            value={2}
            defaultChecked={
              formData.current.options.can_leave_country == 2 ? true : false
            }
          />
          <span className="checkmark"></span>
        </label>
        <div className="descriptionDestinyType">
          <h2 className="checkboxTitle">Não</h2>
          <small>Não me sinto confortável em sair do meu país</small>
        </div>
      </label>
    </FormStyled>
  );
}

export default InternationalTravel;
