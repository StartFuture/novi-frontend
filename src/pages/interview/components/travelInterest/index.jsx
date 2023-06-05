import React, { useRef, useState } from "react";

import { Content } from "./styles";

export default function TravelInterest(props) {
  var formData = useRef(props.formData);

  const [culture, setCulture] = useState(formData.current.culture);

  const checkBtn = () => {
    var isDisable = true;

    Object.keys(formData.current.culture).map(function (key, value) {
      if (formData.current.culture[key] == 1) {
        isDisable = false;
      }
    });

    props.setDisableBtn(isDisable);
  };

  checkBtn();

  const handler = (e) => {
    var value = 0;
    var noPref = document.getElementById("noPref")
    var checkboxList = document.querySelectorAll("input[name=option]");

    switch (Number(e.target.value)) {
      case 0:
        value = culture.music_preference == 1 ? 0 : 1;
        formData.current.culture.music_preference = value;
        value = 0;
        formData.current.culture.no_preference = value;
        noPref.checked = false;
        break;

      case 1:
        value = culture.building_preference == 1 ? 0 : 1;
        formData.current.culture.building_preference = value;
        value = 0;
        formData.current.culture.no_preference = value;
        noPref.checked = false;
        break;

      case 2:
        value = culture.tradiction_preference == 1 ? 0 : 1;
        formData.current.culture.tradiction_preference = value;
        value = 0;
        formData.current.culture.no_preference = value;
        noPref.checked = false;
        break;

      case 3:
        value = culture.party_preference == 1 ? 0 : 1;
        formData.current.culture.party_preference = value;
        value = 0;
        formData.current.culture.no_preference = value;
        noPref.checked = false;
        break;

      case 4:
        value = culture.no_preference == 1 ? 0 : 1;

        if (e.target.checked) {
          for (let i = 0; i < checkboxList.length; i++) {
            checkboxList[i].checked = false; 
          }
        }
        formData.current.culture.no_preference = value;
        value = 0;
        formData.current.culture.music_preference = value;
        formData.current.culture.building_preference = value;
        formData.current.culture.tradiction_preference = value;
        formData.current.culture.party_preference = value;
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
          <div className="checkboxWrapper">
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="option"
                id="music"
                onChange={handler}
                value={0}
                defaultChecked={
                  formData.current.culture.music_preference == 1 ? true : false
                }
              />
              <label htmlFor="music">Arte e música</label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="option"
                id="building"
                onChange={handler}
                value={1}
                defaultChecked={
                  formData.current.culture.building_preference == 1
                    ? true
                    : false
                }
              />
              <label htmlFor="building">Histórias e arquitetura</label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="option"
                id="tradicion"
                onChange={handler}
                value={2}
                defaultChecked={
                  formData.current.culture.tradiction_preference == 1
                    ? true
                    : false
                }
              />
              <label htmlFor="tradicion">Cultura local e tradições</label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="option"
                id="party"
                onChange={handler}
                value={3}
                defaultChecked={
                  formData.current.culture.party_preference == 1 ? true : false
                }
              />
              <label htmlFor="party">Festivais e eventos culturais</label>
            </div>
          </div>
          <div className="formCheckbox">
            <input
              type="checkbox"
              name="noOption"
              id="noPref"
              onChange={handler}
              value={4}
              defaultChecked={
                formData.current.culture.no_preference == 1 ? true : false
              }
            />
            <label htmlFor="noPref">Não tenho preferência</label>
          </div>
        </div>
      </form>
    </Content>
  );
}
