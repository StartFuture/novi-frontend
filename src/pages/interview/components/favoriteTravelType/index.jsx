import React from "react";

import { FormStyled } from "./styles";

function FavoriteTravelType(){
    return(
        <FormStyled>
        <h1 className="titleDestinyType">Qual é o seu estilo favorito de viagens?</h1>
        <div className="formCheckbox">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType1"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <label className="labelDestinyType" htmlFor="optionDestinyType1">Viagens relaxantes e tranquilas</label>
            </div>
        </div>
        <div className="formCheckbox">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType2"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <label className="labelDestinyType" htmlFor="optionDestinyType2">Exploração e descoberta de novos lugares</label>
            </div>
        </div>
        <div className="formCheckbox">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType3"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <label className="labelDestinyType" htmlFor="optionDestinyType3">Imersão cultural e histórica</label>
            </div>
        </div>
        <div className="formCheckbox">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType3"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <label className="labelDestinyType" htmlFor="optionDestinyType3">Em busca de adrenalina e emoções</label>
            </div>
        </div>
        <div className="formCheckbox">
            <label className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType3"/>
                <span className="checkmark"></span>
            </label>
            <div className="descriptionDestinyType">
                <label className="labelDestinyType" htmlFor="optionDestinyType3">Conexão com a natureza e ecoturismo</label>
            </div>
        </div>
    </FormStyled>
    )
}

export default FavoriteTravelType;