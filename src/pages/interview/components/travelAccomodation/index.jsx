import React from "react";

import { FormStyled } from "./styles";

function TravelAccomodation() {
  return (
    <FormStyled>
      <h1 className="titleDestinyType">
        Quais dessas acomodações você prefere?
      </h1>

      <label className="formCheckbox" htmlFor="optionDestinyType1">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optionDestinyType"
            id="optionDestinyType1"
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">Hotéis de luxo e resorts</h2>
      </label>
      <label className="formCheckbox" htmlFor="optionDestinyType2">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optionDestinyType"
            id="optionDestinyType2"
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">Pousadas e acomodações charmosas</h2>
      </label>
      <label className="formCheckbox" htmlFor="optionDestinyType3">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optionDestinyType"
            id="optionDestinyType3"
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">Apartamentos e casas de temporada</h2>
      </label>
      <label className="formCheckbox" htmlFor="optionDestinyType4">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optionDestinyType"
            id="optionDestinyType4"
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">Hostels</h2>
      </label>
      <label className="formCheckbox" htmlFor="optionDestinyType5">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="optionDestinyType"
            id="optionDestinyType5"
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">
          Acampamentos e contato direto com a natureza
        </h2>
      </label>
    </FormStyled>
  );
}

export default TravelAccomodation;
