import React, { useRef } from "react";

import { Content } from "./styles";

export default function TravelTransportation({ formData }) {
  var formData = useRef(formData);

  const handler = (e) => {
    formData.current.options.transport_style = e.target.value;
    sessionStorage.setItem("currInterview", JSON.stringify(formData.current));
  };

  return (
    <Content>
      <form>
        <div>
          <h2>
            Quais são suas preferências em relação a transporte durante a
            viagem?
          </h2>
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
                  formData.current.options.transport_style === 1 ? true : false
                }
              />
              <label htmlFor="relax">Voo direto para o destino</label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="acceptTerm"
                id="hiking"
                onChange={handler}
                value={1}
                defaultChecked={
                  formData.current.options.transport_style === 1 ? true : false
                }
              />
              <label htmlFor="hiking">
                Voos com escalas para economizar dinheiro
              </label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="acceptTerm"
                id="history"
                onChange={handler}
                value={1}
                defaultChecked={
                  formData.current.options.transport_style === 1 ? true : false
                }
              />
              <label htmlFor="history">Viagens de trens e/ou ônibus</label>
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
                formData.current.options.transport_style === 1 ? true : false
              }
            />
            <label htmlFor="gastronomic">Não tenho preferência</label>
          </div>
        </div>
      </form>
    </Content>
  );
}
