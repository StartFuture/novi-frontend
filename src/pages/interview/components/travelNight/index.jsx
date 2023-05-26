import React from "react";

import { FormStyled } from "./styles";

function TravelNight(){
    return(
        <FormStyled>
        <h1 className="titleDestinyType">Qual tipo de destino você prefere?</h1>
        <div className="formCheckbox">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType1"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <label className="labelDestinyType" htmlFor="optionDestinyType1">Praia e litoral</label>
                <small>Belissimas praias ao redor do nosso Brasilzao</small>
            </div>
        </div>
        <div className="formCheckbox">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType2"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <label className="labelDestinyType" htmlFor="optionDestinyType2">Montanhas e paisagens naturais</label>
                <small>Se impressione com vistas maravilhosas</small>
            </div>
        </div>
        <div className="formCheckbox">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType3"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <label className="labelDestinyType" htmlFor="optionDestinyType3">Cidades históricas e culturas</label>
                <small>Conheça pontos turísticos nas cidades nas lindas</small>
            </div>
        </div>
        <div className="formCheckbox">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType3"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <label className="labelDestinyType" htmlFor="optionDestinyType3">Aventuras e esportes radicais </label>
                <small>Aventureiro? Conheça as melhores aventuras</small>
            </div>
        </div>
        <div className="formCheckbox">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType3"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <label className="labelDestinyType" htmlFor="optionDestinyType3">Natureza exuberante e vida selvagem</label>
                <small>Conecte com a natureza com experiências incriveis</small>
            </div>
        </div>
    </FormStyled>
    )
}

export default TravelNight;