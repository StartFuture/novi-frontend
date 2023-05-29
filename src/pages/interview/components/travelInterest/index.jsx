import React, { useRef } from "react";

import { Content } from "./styles";

export default function TravelInterest({ formData }) {
  var formData = useRef(formData);

  const handler = (e) => {
    if (e.target.value === 1) {
      formData.current.culture.target = e.target.value;
    }
  };

  return (
    <Content>
      <form>
        <div>
          <h2>Quais são seus interesses culturais durante uma viagem?</h2>
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
                  formData.current.culture.music_preference == 1 ? true : false
                }
              />
              <label htmlFor="relax">Arte e música</label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="acceptTerm"
                id="hiking"
                onChange={handler}
                value={1}
                defaultChecked={
                  formData.current.culture.building_preference == 1 ? true : false
                }
              />
              <label htmlFor="hiking">Histórias e arquitetura</label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="acceptTerm"
                id="history"
                onChange={handler}
                value={1}
                defaultChecked={
                  formData.current.culture.tradicion_preference == 1 ? true : false
                }
              />
              <label htmlFor="history">Cultura local e tradições</label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="acceptTerm"
                id="sports"
                onChange={handler}
                value={1}
                defaultChecked={
                  formData.current.culture.party_preference == 1 ? true : false
                }
              />
              <label htmlFor="sports">Festivais e eventos culturais</label>
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
                formData.current.culture.no_preference == 1 ? true : false
              }
            />
            <label htmlFor="gastronomic">Não tenho preferência</label>
          </div>
        </div>
      </form>
    </Content>
  );
}
