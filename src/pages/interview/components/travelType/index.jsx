import React, { useRef } from "react";

import { FormStyled } from "./styles";

function TravelType(props) {
  var formData = useRef(props.formData);
  props.setDisableBtn(
    formData.current.options.travel_destination == 0 ? true : false
  );

  const handler = (e) => {
    formData.current.options.travel_destination = e.target.value;
    sessionStorage.setItem("currInterview", JSON.stringify(formData.current));
    props.setDisableBtn(false);
  };

  return (
    <FormStyled>
      <label className="formCheckbox" htmlFor="option1">
        <div className="customBtn">
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
          <div className="checkmark"><span/></div>
        </div>
        <div className="checkboxContent">
          <h3>Praia e litoral</h3>
          <small>Belissimas praias ao redor do nosso Brasilzao</small>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option2">
        <div className="customBtn">
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
          <div className="checkmark"><span/></div>
        </div>
        <div className="checkboxContent">
          <h3>Montanhas e paisagens naturais</h3>
          <small>Se impressione com vistas maravilhosas</small>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option3">
        <div className="customBtn">
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
          <div className="checkmark"><span/></div>
        </div>
        <div className="checkboxContent">
          <h3>Cidades históricas e culturas</h3>
          <small>Conheça pontos turísticos nas cidades nas lindas</small>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option4">
        <div className="customBtn">
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
          <div className="checkmark"><span/></div>
        </div>
        <div className="checkboxContent">
          <h3>Aventuras e esportes radicais </h3>
          <small>Aventureiro? Conheça as melhores aventuras</small>
        </div>
      </label>
      <label className="formCheckbox" htmlFor="option5">
        <div className="customBtn">
          <input
            type="radio"
            name="optionDestinyType"
            id="option5"
            onChange={handler}
            value={5}
            defaultChecked={
              formData.current.options.travel_destination == 5 ? true : false
            }
          />
          <div className="checkmark"><span/></div>
        </div>
        <div className="checkboxContent">
          <h3>Natureza exuberante e vida selvagem</h3>
          <small>Conecte com a natureza com experiências incriveis</small>
        </div>
      </label>
    </FormStyled>
  );
}

export default TravelType;
