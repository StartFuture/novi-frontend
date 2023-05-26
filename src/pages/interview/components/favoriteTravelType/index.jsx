import React from "react";

import { FormStyled } from "./styles";

function FavoriteTravelType(){
    return(
        <FormStyled>
        <h1 className="titleDestinyType">Qual é o seu estilo favorito de viagens?</h1>

        <label className="formCheckbox" htmlFor="optionDestinyType1">
            <div className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType1"/>
                <span className="checkmark"></span>
            </div>
            <h2 className="checkboxTitle">Viagens relaxantes e tranquilas</h2>
        </label>
        <label className="formCheckbox" htmlFor="optionDestinyType2">
            <div className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType2"/>
                <span className="checkmark"></span>
            </div>
            <h2 className="checkboxTitle">Exploração e descoberta de novos lugares</h2>
        </label>
        <label className="formCheckbox" htmlFor="optionDestinyType3">
            <div className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType3"/>
                <span className="checkmark"></span>
            </div>
            <h2 className="checkboxTitle">Imersão cultural e histórica</h2>
        </label>
        <label className="formCheckbox" htmlFor="optionDestinyType4">
            <div className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType4"/>
                <span className="checkmark"></span>
            </div>
            <h2 className="checkboxTitle">Em busca de adrenalina e emoções</h2>
        </label>
        <label className="formCheckbox" htmlFor="optionDestinyType5">
            <div className="custom-radio-btn">
                <input type="radio" name="optionDestinyType" id="optionDestinyType5"/>
                <span className="checkmark"></span>
            </div>
            <h2 className="checkboxTitle">Conexão com a natureza e ecoturismo</h2>
        </label>
    </FormStyled>
    )
}

export default FavoriteTravelType;