import React, { useRef } from "react";

import { FormStyled } from "./styles";

function InternationalTravel(props) {
  var formData = useRef(props.formData);
  props.setDisableBtn(
    formData.current.options.can_leave_country == 0 ? true : false
  );

  const handler = (e) => {
    formData.current.options.can_leave_country = e.target.value;
    sessionStorage.setItem("currInterview", JSON.stringify(formData.current));
    props.setDisableBtn(false);
  };

  return (
    <FormStyled>
      <label className="formCheckbox" htmlFor="optionDestinyType1">
        <div className="customBtn">
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
          <div className="checkmark"><span/></div>
        </div>
        <div className="checkboxContent">
          <h3>Sim</h3>
          <small>Adoraria uma viagem internacional</small>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="optionDestinyType2">
        <label className="customBtn">
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
          <div className="checkmark"><span/></div>
        </label>
        <div className="checkboxContent">
          <h3>Não</h3>
          <small>Não me sinto confortável em sair do meu país</small>
        </div>
      </label>
    </FormStyled>
  );
}

export default InternationalTravel;
