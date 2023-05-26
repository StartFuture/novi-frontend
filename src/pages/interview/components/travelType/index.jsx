import React from "react";

import { FormStyled } from "./styles";

function TravelType() {
  return (
    <FormStyled>
      <h1 className="titleDestinyType">Qual tipo de destino você prefere?</h1>
    
      <label className="formCheckbox" htmlFor="optionDestinyType1">
            <div className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType1"/>
                <span className="checkmark"></span>
            </div>
            <div className="descriptionDestinyType">
                <h2 className="checkboxTitle">Praia e litoral</h2>
                <small>Belissimas praias ao redor do nosso Brasilzao</small>
            </div>
        </label>
        <label className="formCheckbox" htmlFor="optionDestinyType2">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType2"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <h2 className="checkboxTitle">Montanhas e paisagens naturais</h2>
                <small>Se impressione com vistas maravilhosas</small>
            </div>
        </label>
        <label className="formCheckbox" htmlFor="optionDestinyType3">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType3"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <h2 className="checkboxTitle">Cidades históricas e culturas</h2>
                <small>Conheça pontos turísticos nas cidades nas lindas</small>
            </div>
        </label>
        <label className="formCheckbox" htmlFor="optionDestinyType4">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType4"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <h2 className="checkboxTitle">Aventuras e esportes radicais </h2>
                <small>Aventureiro? Conheça as melhores aventuras</small>
            </div>
        </label>
        <label className="formCheckbox" htmlFor="optionDestinyType5">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType5"/>
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
