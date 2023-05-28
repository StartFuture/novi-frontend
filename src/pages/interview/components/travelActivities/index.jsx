import React from "react";

import { Content } from "./styles";

export default function TravelActivities(formData) {
  var formData = useRef(formData);

  const handler = (e) => {
    if (e.target.value === 1) {
      formData.current.activitie.target = e.target.value;
    }
  };

  sessionStorage.setItem("currInterview", JSON.stringify(formData.current));

  return (
    <Content>
      <form>
        <div>
          <h2>Quais atividades você mais gosta durante a viagem?</h2>
        </div>
        <div>
          <div className="formCheckbox">
            <input
              type="checkbox"
              name="acceptTerm"
              id="relax"
              onChange={handler}
              value={1}
              defaultChecked={
                formData.current.activite.water_preference == 1 ? true : false
              }
            />
            <label htmlFor="relax">
              Relaxar na praia ou à beira da piscina
            </label>
          </div>
          <div className="formCheckbox">
            <input
              type="checkbox"
              name="acceptTerm"
              id="hiking"
              onChange={handler}
              value={1}
              defaultChecked={
                formData.current.activite.walk_preference == 1 ? true : false
              }
            />
            <label htmlFor="hiking">
              Fazer trilhas e caminhadas ao ar livre
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
                formData.current.activite.historic_preference == 1 ? true : false
              }
            />
            <label htmlFor="history">Explorar museus e locais históricos</label>
          </div>
          <div className="formCheckbox">
            <input
              type="checkbox"
              name="acceptTerm"
              id="sports"
              onChange={handler}
              value={1}
              defaultChecked={
                formData.current.activite.sport_preference == 1 ? true : false
              }
            />
            <label htmlFor="sports">
              Praticar esportes radicais e de aventura
            </label>
          </div>
          <div className="formCheckbox">
            <input
              type="checkbox"
              name="acceptTerm"
              id="gastronomic"
              onChange={handler}
              value={1}
              defaultChecked={
                formData.current.activite.food_preference == 1 ? true : false
              }
            />
            <label htmlFor="gastronomic">
              Experimentar a gastronomia e fazer passeios gastronômicos
            </label>
          </div>
        </div>
      </form>
    </Content>
  );
}
