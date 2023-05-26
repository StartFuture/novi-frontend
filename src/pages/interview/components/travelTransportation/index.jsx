import React from "react";

import { Content } from "./styles";

export default function TravelTransportation() {
  return (
    <Content>
      <form>
        <div>
          <h2>Quais atividades você mais gosta durante a viagem?</h2>
        </div>
        <div>
        <div className="formCheckbox">
          <input type="checkbox" name="acceptTerm" id="relax"/>
          <label htmlFor="relax">Relaxar na praia ou à beira da piscina</label>
        </div>
        <div className="formCheckbox">
          <input type="checkbox" name="acceptTerm" id="hiking"/>
          <label htmlFor="hiking">Fazer trilhas e caminhadas ao ar livre</label>
        </div>
        <div className="formCheckbox">
          <input type="checkbox" name="acceptTerm" id="history"/>
          <label htmlFor="history">Explorar museus e locais históricos</label>
        </div>
        <div className="formCheckbox">
          <input type="checkbox" name="acceptTerm" id="sports"/>
          <label htmlFor="sports">Praticar esportes radicais e de aventura</label>
        </div>
        <div className="formCheckbox">
          <input type="checkbox" name="acceptTerm" id="gastronomic"/>
          <label htmlFor="gastronomic">Experimentar a gastronomia e fazer passeios gastronômicos</label>
        </div>
        </div>
      </form>
    </Content>
  );
}
