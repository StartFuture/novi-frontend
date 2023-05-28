import React from "react";

import { Content } from "./styles";

export default function TravelTransportation() {
  var formData = useRef(formData);

  const handler = (e) => {
    formData.current.option.travel_style = e.target.value;
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
                value={1}
                defaultChecked={
                  formData.current.option.travel_style == 1 ? true : false
                }
              />
              <label htmlFor="relax">Voo direto para o destino</label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="acceptTerm"
                id="hiking"
                value={2}
                defaultChecked={
                  formData.current.option.travel_style == 2 ? true : false
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
                value={3}
                defaultChecked={
                  formData.current.option.travel_style == 3 ? true : false
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
              value={4}
              defaultChecked={
                formData.current.option.travel_style == 4 ? true : false
              }
            />
            <label htmlFor="gastronomic">Não tenho preferência</label>
          </div>
        </div>
      </form>
    </Content>
  );
}
