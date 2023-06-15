import React, { useRef, useState } from "react";

import { Content } from "./styles";

export default function Travelactivitie(props) {
  var formData = useRef(props.formData);

  const [activitie, setactivitie] = useState(formData.current.activitie);

  const checkBtn = () => {
    var isDisable = true;

    Object.keys(formData.current.activitie).map(function (key, value) {
      if (formData.current.activitie[key] == 1) {
        isDisable = false;
      }
    });

    props.setDisableBtn(isDisable);
  };

  checkBtn();

  const handler = (e) => {
    var value = 0;

    switch (Number(e.target.value)) {
      case 0:
        value = activitie.water_preference == 1 ? 0 : 1;
        formData.current.activitie.water_preference = value;
        break;

      case 1:
        value = activitie.walk_preference == 1 ? 0 : 1;
        formData.current.activitie.walk_preference = value;
        break;

      case 2:
        value = activitie.historic_preference == 1 ? 0 : 1;
        formData.current.activitie.historic_preference = value;
        break;

      case 3:
        value = activitie.sport_preference == 1 ? 0 : 1;
        formData.current.activitie.sport_preference = value;
        break;

      case 4:
        value = activitie.food_preference == 1 ? 0 : 1;
        formData.current.activitie.food_preference = value;
        break;

      default:
        break;
    }

    sessionStorage.setItem("currInterview", JSON.stringify(formData.current));
    checkBtn();
  };

  return (
    <Content>
      <form>
        <div>
          <div className="formCheckbox">
            <input
              type="checkbox"
              name="acceptTerm"
              id="relax"
              onChange={handler}
              value={0}
              defaultChecked={
                formData.current.activitie.water_preference == 1 ? true : false
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
                formData.current.activitie.walk_preference == 1 ? true : false
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
              value={2}
              defaultChecked={
                formData.current.activitie.historic_preference == 1
                  ? true
                  : false
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
              value={3}
              defaultChecked={
                formData.current.activitie.sport_preference == 1 ? true : false
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
              value={4}
              defaultChecked={
                formData.current.activitie.food_preference == 1 ? true : false
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
