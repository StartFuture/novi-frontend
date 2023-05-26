import React from "react";

import { Content } from "./styles";

export default function TravelTransportation() {
  return (
    <Content>
      <form>
        <div>
          <h2>Quais são suas preferências em relação a transporte durante a viagem?</h2>
        </div>
        <div>
          <div className="checkboxWrapper">
            <div className="formCheckbox">
              <input type="checkbox" name="acceptTerm" id="relax" />
              <label htmlFor="relax">Voo direto para o destino</label>
            </div>
            <div className="formCheckbox">
              <input type="checkbox" name="acceptTerm" id="hiking" />
              <label htmlFor="hiking">Voos com escalas para economizar dinheiro</label>
            </div>
            <div className="formCheckbox">
              <input type="checkbox" name="acceptTerm" id="history" />
              <label htmlFor="history">Viagens de trens e/ou ônibus</label>
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
