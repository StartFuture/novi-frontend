import React from "react";

import { FormStyled } from "./styles";

function TravelAccomodation(formData) {
  var formData = useRef(formData)

    const handler = (e) => {
        formData.current.options.accomodation_style = e.target.value;
        sessionStorage.setItem("currInterview", JSON.stringify(formData.current))
    }

  return (
    <FormStyled>
      <h1 className="titleDestinyType">
        Quais dessas acomodações você prefere?
      </h1>

      <label className="formCheckbox" htmlFor="option1">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="accomodationStyle"
            id="option1"
            onChange={handler}
            value={1}
            defaultChecked={
              formData.current.options.accomodation_style == 1 ? true : false
            }
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">Hotéis de luxo e resorts</h2>
      </label>
      <label className="formCheckbox" htmlFor="option2">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="accomodationStyle"
            id="option2"
            onChange={handler}
            value={2}
            defaultChecked={
              formData.current.options.accomodation_style == 2 ? true : false
            }
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">Pousadas e acomodações charmosas</h2>
      </label>
      <label className="formCheckbox" htmlFor="option3">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="accomodationStyle"
            id="option3"
            onChange={handler}
            value={3}
            defaultChecked={
              formData.current.options.accomodation_style == 3 ? true : false
            }
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">Apartamentos e casas de temporada</h2>
      </label>
      <label className="formCheckbox" htmlFor="option4">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="accomodationStyle"
            id="option4"
            onChange={handler}
            value={4}
            defaultChecked={
              formData.current.options.accomodation_style == 4 ? true : false
            }
          />
          <span className="checkmark"></span>
        </div>
        <h2 className="checkboxTitle">Hostels</h2>
      </label>
      <label className="formCheckbox" htmlFor="option5">
        <div className="custom-radio-btn">
          <input
            type="radio"
            name="accomodationStyle"
            id="option5"
            onChange={handler}
            value={5}
            defaultChecked={
              formData.current.options.accomodation_style == 5 ? true : false
            }
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
