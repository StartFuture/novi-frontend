import React, { useRef } from "react";

import { FormStyled } from "./styles";

function FavoriteTravelType({ formData }) {
  var formData = useRef(formData);

  const handler = (e) => {
    formData.current.options.travel_style = e.target.value;
    sessionStorage.setItem("currInterview", JSON.stringify(formData.current));
  };

  return (
    <FormStyled>
      <h1 className="titleDestinyType">
        Qual é o seu estilo favorito de viagens?
      </h1>

      <label className="formCheckbox" htmlFor="option1">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optional"
            id="option1"
            onChange={handler}
            value={1}
            defaultChecked={
              formData.current.options.travel_style == 1 ? true : false
            }
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">Viagens relaxantes e tranquilas</h2>
      </label>
      <label className="formCheckbox" htmlFor="option2">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optional"
            id="option2"
            onChange={handler}
            value={2}
            defaultChecked={
              formData.current.options.travel_style == 2 ? true : false
            }
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">
          Exploração e descoberta de novos lugares
        </h2>
      </label>
      <label className="formCheckbox" htmlFor="option3">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optional"
            id="option3"
            onChange={handler}
            value={3}
            defaultChecked={
              formData.current.options.travel_style == 3 ? true : false
            }
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">Imersão cultural e histórica</h2>
      </label>
      <label className="formCheckbox" htmlFor="option4">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optional"
            id="option4"
            onChange={handler}
            value={4}
            defaultChecked={
              formData.current.options.travel_style == 4 ? true : false
            }
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">Em busca de adrenalina e emoções</h2>
      </label>
      <label className="formCheckbox" htmlFor="option5">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optional"
            id="option5"
            onChange={handler}
            value={5}
            defaultChecked={
              formData.current.options.travel_style == 5 ? true : false
            }
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">Conexão com a natureza e ecoturismo</h2>
      </label>
    </FormStyled>
  );
}

export default FavoriteTravelType;
