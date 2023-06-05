import React, { useRef } from "react";

import { FormStyled } from "./styles";

function TravelAccomodation(props) {
  var formData = useRef(props.formData);
  props.setDisableBtn(
    formData.current.options.accomodation_style == 0 ? true : false
  );

  const handler = (e) => {
    formData.current.options.accomodation_style = e.target.value;
    sessionStorage.setItem("currInterview", JSON.stringify(formData.current));
    props.setDisableBtn(false);
  };

  return (
    <FormStyled>
      <label className="formCheckbox" htmlFor="option1">
        <div className="customBtn">
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
          <div className="checkmark">
            <span />
          </div>
        </div>
        <div className="checkboxContent">
          <h3>Hotéis de luxo e resorts</h3>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option2">
        <div className="customBtn">
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
          <div className="checkmark">
            <span />
          </div>
        </div>
        <div className="checkboxContent">
          <h3>Pousadas e acomodações charmosas</h3>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option3">
        <div className="customBtn">
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
          <div className="checkmark">
            <span />
          </div>
        </div>
        <div className="checkboxContent">
          <h3>Apartamentos e casas de temporada</h3>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option4">
        <div className="customBtn">
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
          <div className="checkmark">
            <span />
          </div>
        </div>
        <div className="checkboxContent">
          <h3>Hostels</h3>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option5">
        <div className="customBtn">
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
          <div className="checkmark">
            <span />
          </div>
        </div>
        <div className="checkboxContent">
          <h3>
            Acampamentos e contato direto com a natureza
          </h3>
        </div>
      </label>
    </FormStyled>
  );
}

export default TravelAccomodation;
