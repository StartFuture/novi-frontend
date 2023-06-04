import React, { useRef } from "react";

import { FormStyled } from "./styles";

function FavoriteTravelType(props) {
  var formData = useRef(props.formData);
  props.setDisableBtn(
    formData.current.options.travel_style == 0 ? true : false
  );

  const handler = (e) => {
    formData.current.options.travel_style = e.target.value;
    sessionStorage.setItem("currInterview", JSON.stringify(formData.current));
    props.setDisableBtn(false);
  };

  return (
    <FormStyled>
      <label className="formCheckbox" htmlFor="option1">
        <div className="customBtn">
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
          <div className="checkmark">
            <span />
          </div>
        </div>
        <div>
          <div className="checkboxContent">
            <h3 >Viagens relaxantes e tranquilas</h3>
          </div>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option2">
        <div className="customBtn">
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
          <div className="checkmark">
            <span />
          </div>
        </div>
        <div className="checkboxContent">
          <h3 >
            Exploração e descoberta de novos lugares
          </h3>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option3">
        <div className="customBtn">
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
          <div className="checkmark">
            <span />
          </div>
        </div>
        <div className="checkboxContent">
          <h3 >Imersão cultural e histórica</h3>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option4">
        <div className="customBtn">
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
          <div className="checkmark">
            <span />
          </div>
        </div>
        <div className="checkboxContent">
          <h3 >Em busca de adrenalina e emoções</h3>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option5">
        <div className="customBtn">
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
          <div className="checkmark">
            <span />
          </div>
        </div>
        <div className="checkboxContent">
          <h3 >
            Conexão com a natureza e ecoturismo
          </h3>
        </div>
      </label>
    </FormStyled>
  );
}

export default FavoriteTravelType;
