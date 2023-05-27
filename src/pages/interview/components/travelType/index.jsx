import React, { useRef } from "react";

import { FormStyled } from "./styles";

function TravelType({formData}) {
    var formData = useRef(formData)

    const handler = (e) => {
        formData.current.travel_type = e.target.value;
        sessionStorage.setItem("currInterview", JSON.stringify(formData.current))
    }

  return (
    <FormStyled>
      <h1 className="titleDestinyType">Qual tipo de destino você prefere?</h1>
    
      <label className="formCheckbox" htmlFor="option1">
            <div className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="option1" onChange={handler} value={1} defaultChecked={formData.current.travel_type == 1 ? true : false}/>
                <span className="checkmark"></span>
            </div>
            <div className="descriptionDestinyType">
                <h2 className="checkboxTitle">Praia e litoral</h2>
                <small>Belissimas praias ao redor do nosso Brasilzao</small>
            </div>
        </label>
        <label className="formCheckbox" htmlFor="option2">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="option2" onChange={handler} value={2} defaultChecked={formData.current.travel_type == 2 ? true : false}/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <h2 className="checkboxTitle">Montanhas e paisagens naturais</h2>
                <small>Se impressione com vistas maravilhosas</small>
            </div>
        </label>
        <label className="formCheckbox" htmlFor="option3">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="option3" onChange={handler} value={3} defaultChecked={formData.current.travel_type == 3 ? true : false}/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <h2 className="checkboxTitle">Cidades históricas e culturas</h2>
                <small>Conheça pontos turísticos nas cidades nas lindas</small>
            </div>
        </label>
        <label className="formCheckbox" htmlFor="option4">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="option4" onChange={handler} value={4} defaultChecked={formData.current.travel_type == 4 ? true : false}/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <h2 className="checkboxTitle">Aventuras e esportes radicais </h2>
                <small>Aventureiro? Conheça as melhores aventuras</small>
            </div>
        </label>
        <label className="formCheckbox" htmlFor="option5">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="option5" onChange={handler} value={5} defaultChecked={formData.current.travel_type == 5 ? true : false}/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <h2 className="checkboxTitle">Natureza exuberante e vida selvagem</h2>
                <small>Conecte com a natureza com experiências incriveis</small>
            </div>
        </label>
    </FormStyled>
  );
}

export default TravelType;
