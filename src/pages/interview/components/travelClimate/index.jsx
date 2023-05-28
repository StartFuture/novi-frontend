import React from "react";

import { Content } from "./styles";

export default function TravelClimate(formData) {
  var formData = useRef(formData)

    const handler = (e) => {
        formData.current.travel_type = e.target.value;
        sessionStorage.setItem("currInterview", JSON.stringify(formData.current))
    }

  return (
    <Content>
      <form>
        <div>
          <h2>Qual é a sua preferência em relação ao clima durante a viagem</h2>
        </div>
        <div>
          <div className="checkboxWrapper">
            <div className="formCheckbox">
              <input type="checkbox" name="acceptTerm" id="relax" />
              <label htmlFor="relax">Clima quente</label>
            </div>
            <div className="formCheckbox">
              <input type="checkbox" name="acceptTerm" id="hiking" />
              <label htmlFor="hiking">Clima ameno e temperado</label>
            </div>
            <div className="formCheckbox">
              <input type="checkbox" name="acceptTerm" id="history" />
              <label htmlFor="history">Clima frio e neve</label>
            </div>
          </div>
          <div className="formCheckbox">
            <input type="checkbox" name="acceptTerm" id="gastronomic" />
            <label htmlFor="gastronomic">Não tenho preferência</label>
          </div>
        </div>
      </form>
    </Content>
  );
}
