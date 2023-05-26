import React from "react";

import { Content } from "./styles";

export default function TravelInterest() {
  return (
    <Content>
      <form>
        <div>
          <h2>Quais são seus interesses culturais durante uma viagem?</h2>
        </div>
        <div>
          <div className="checkboxWrapper">
            <div className="formCheckbox">
              <input type="checkbox" name="acceptTerm" id="relax" />
              <label htmlFor="relax">Arte e música</label>
            </div>
            <div className="formCheckbox">
              <input type="checkbox" name="acceptTerm" id="hiking" />
              <label htmlFor="hiking">Histórias e arquitetura</label>
            </div>
            <div className="formCheckbox">
              <input type="checkbox" name="acceptTerm" id="history" />
              <label htmlFor="history">Cultura local e tradições</label>
            </div>
            <div className="formCheckbox">
              <input type="checkbox" name="acceptTerm" id="sports" />
              <label htmlFor="sports">Festivais e eventos culturais</label>
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
