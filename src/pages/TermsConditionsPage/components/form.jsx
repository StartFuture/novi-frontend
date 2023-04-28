import React, { Component } from "react";

export default class form extends Component {
  render() {
    return (
      <form action="" id="termsConditionsForm">
        <div>
          <h2>Termos e condições</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nisi non sem mauris eget.
            Amet semper ultricies dui nunc duis aliquet dolor imperdiet dictum.
            Nisi cras aliquet sollicitudin proin. Imperdiet lacus ultrices
            cursus dolor egestas euismod non laoreet consequat. Porttitor
            nascetur sagittis sit pellentesque. Sed lectus blandit in tortor
            tellus ac arcu ornare id. Fringilla turpis posuere blandit vitae in
            turpis elementum. Sed lectus blandit in tortor tellus ac arcu ornare
            id. Fringilla turpis posuere blandit vitae in turpis elementum.
          </p>
        </div>
        <div>
          <input type="checkbox" name="acceptAll" id="acceptAll" />
          <label htmlFor="acceptAll">Aceito todos os termos</label>
        </div>
        <div>
          <input type="checkbox" name="noviNews" id="noviNews" />
          <label htmlFor="noviNews">Você deseja receber novidades sobre a NOVI ?</label>
          <input type="checkbox" name="acceptUseData" id="acceptUseData" />
          <label htmlFor="acceptUseData">Aceito que utilizem os meus dados informados</label>
          <input type="checkbox" name="acceptTermsConditions" id="acceptTermsConditions" />
          <label htmlFor="acceptTermsConditions">Aceito os termos e condições</label>
        </div>
        <div>
          <input type="submit" value="Continuar" />
        </div>
      </form>
    );
  }
}
