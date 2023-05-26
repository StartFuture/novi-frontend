import React from "react";

import { FormStyled } from "./styles";

function TravelNight(){
    return(
        <FormStyled>
        <h1 className="titleDestinyType">Tem preferência por agitação à noite?</h1>
    
    <label className="formCheckbox" htmlFor="option1">
          <div className="custom-radio-btn">
              <input type="radio" name="optionaNight" id="option1"/>
              <span className="checkmark"></span>
          </div>
          <div className="descriptionDestinyType">
              <h2 className="checkboxTitle">Vida noturna animada</h2>
              <small>Gosto de ir em shows, musicais, baladas, etc. Quero curtir !</small>
          </div>
      </label>
      <label className="formCheckbox" htmlFor="option2">
          <label className="custom-radio-btn">
              <input type="radio" name="optionaNight" id="option2"/>
              <span className="checkmark"></span>
          </label>
          <div className="descriptionDestinyType">
              <h2 className="checkboxTitle">Gosto de ter opções para sair a noite</h2>
              <small>Se algo me chamar atenção, vou optar por incluir no meu roteiro</small>
          </div>
      </label>
      <label className="formCheckbox" htmlFor="option3">
          <label className="custom-radio-btn">
              <input type="radio" name="optionaNight" id="option3"/>
              <span className="checkmark"></span>
          </label>
          <div className="descriptionDestinyType">
              <h2 className="checkboxTitle">Não gostaria</h2>
              <small>Evito sair a noite durante as minhas viagens</small>
          </div>
      </label>
    </FormStyled>
    )
}

export default TravelNight;