import React, { useRef } from "react";

import { FormStyled } from "./styles";

export default function TravelTransportation({ formData }) {
  var formData = useRef(formData);

  const handler = (e) => {
    formData.current.options.transport_style = e.target.value;
    sessionStorage.setItem("currInterview", JSON.stringify(formData.current));
  };

  return (
    <FormStyled>
      <label className="formCheckbox" htmlFor="option1">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optionDestinyType"
            id="option1"
            onChange={handler}
            value={1}
            defaultChecked={
              formData.current.options.travel_destination == 1 ? true : false
            }
          />
          <span className="checkmark"></span>
        </div>
        <div className="descriptionDestinyType">
          <h2 className="checkboxTitle">Voo direto para o destino</h2>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option2">
        <label className="custom-radio-btn">
          <input
            type="radio"
            name="optionDestinyType"
            id="option2"
            onChange={handler}
            value={2}
            defaultChecked={
              formData.current.options.travel_destination == 2 ? true : false
            }
          />
          <span className="checkmark"></span>
        </label>
        <div className="descriptionDestinyType">
          <h2 className="checkboxTitle">Voos com escalas para economizar dinheiro</h2>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option3">
        <label className="custom-radio-btn">
          <input
            type="radio"
            name="optionDestinyType"
            id="option3"
            onChange={handler}
            value={3}
            defaultChecked={
              formData.current.options.travel_destination == 3 ? true : false
            }
          />
          <span className="checkmark"></span>
        </label>
        <div className="descriptionDestinyType">
          <h2 className="checkboxTitle">Viagens de trens e/ou ônibus</h2>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option4">
        <label className="custom-radio-btn">
          <input
            type="radio"
            name="optionDestinyType"
            id="option4"
            onChange={handler}
            value={4}
            defaultChecked={
              formData.current.options.travel_destination == 4 ? true : false
            }
          />
          <span className="checkmark"></span>
        </label>
        <div className="descriptionDestinyType">
          <h2 className="checkboxTitle">Não tenho preferência</h2>
        </div>
      </label>
    </FormStyled>
  );
}
