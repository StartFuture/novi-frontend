import React, { useRef } from "react";

import { Content } from "./styles";

export default function TravelClimate({ formData }) {
  var formData = useRef(formData);

  const handler = (e) => {
    if (e.target.value === 1) {
      formData.current.weather.target = e.target.value;
    }
  };
  return (
    <Content>
      <form>
        <div>
          <h2>Qual é a sua preferência em relação ao clima durante a viagem</h2>
        </div>
        <div>
          <div className="checkboxWrapper">
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="acceptTerm"
                id="relax"
                onChange={handler}
                value={1}
                defaultChecked={
                  formData.current.activite.warm == 1 ? true : false
                }
              />
              <label htmlFor="relax">Clima quente</label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="acceptTerm"
                id="hiking"
                onChange={handler}
                value={1}
                defaultChecked={
                  formData.current.activite.mild == 1 ? true : false
                }
              />
              <label htmlFor="hiking">Clima ameno e temperado</label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="acceptTerm"
                id="history"
                onChange={handler}
                value={1}
                defaultChecked={
                  formData.current.activite.cold == 1 ? true : false
                }
              />
              <label htmlFor="history">Clima frio e neve</label>
            </div>
          </div>
          <div className="formCheckbox">
            <input
              type="checkbox"
              name="acceptTerm"
              id="gastronomic"
              onChange={handler}
              value={1}
              defaultChecked={
                formData.current.activite.no_preference == 1 ? true : false
              }
            />
            <label htmlFor="gastronomic">Não tenho preferência</label>
          </div>
        </div>
      </form>
    </Content>
  );
}
