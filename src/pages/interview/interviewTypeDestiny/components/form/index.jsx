import React from "react";

import { FormStyled } from "./styles";

function Form(){
    return(
        <FormStyled>
            <h1 className="titleDestinyType">Qual tipo de destino você prefere?</h1>
            <div className="formCheckbox">
                <input type="radio" name="optionDestinyType" id="optionDestinyType1" style={{border: "10px solid blue"}}/>
                <div className="descriptionDestinyType">
                    <label className="labelDestinyType" htmlFor="optionDestinyType1">Praia </label>
                    <small>Belissimas praias ao redor do nosso Brasilzao</small>
                </div>
            </div>
            <div className="formCheckbox">
                <input type="radio" name="optionDestinyType" id="optionDestinyType2"/>
                <div className="descriptionDestinyType">
                    <label className="labelDestinyType" htmlFor="optionDestinyType2">Natureza </label>
                    <small>Conecte com a natureza com experiências incriveis</small>
                </div>
            </div>
            <div className="formCheckbox">
                <input type="radio" name="optionDestinyType" id="optionDestinyType3"/>
                <div className="descriptionDestinyType">
                    <label className="labelDestinyType" htmlFor="optionDestinyType3">Urbano </label>
                    <small>Conheça pontos turísticos nas cidades nas lindas</small>
                </div>
            </div>
        </FormStyled>
        
    );
}

export default Form;