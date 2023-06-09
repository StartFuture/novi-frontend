import React, { useRef, useState } from "react";

import { Content } from "./styles";

export default function TravelClimate(props) {
  var formData = useRef(props.formData);

  const [weather, setWeather] = useState(formData.current.weather);

  const checkBtn = () => {
    var isDisable = true;

    Object.keys(formData.current.weather).map(function (key, value) {
      if (formData.current.weather[key] == 1) {
        isDisable = false;
      }
    });

    props.setDisableBtn(isDisable);
  };

  checkBtn();

  const handler = (e) => {
    var value = 0;
    var noPref = document.getElementById("noPref");
    var checkboxList = document.querySelectorAll("input[name=option]");

    switch (Number(e.target.value)) {
      case 0:
        value = weather.warm == 1 ? 0 : 1;
        formData.current.weather.warm = value;
        formData.current.weather.no_preference = false;
        noPref.checked = false;
        break;

      case 1:
        value = weather.mild == 1 ? 0 : 1;
        formData.current.weather.mild = value;
        formData.current.weather.no_preference = false;
        noPref.checked = false;
        break;

      case 2:
        value = weather.cold == 1 ? 0 : 1;
        formData.current.weather.cold = value;
        formData.current.weather.no_preference = false;
        noPref.checked = false;
        break;

      case 3:
        var noPrefValue = weather.no_preference ? false : true;

        if (e.target.checked) {
          for (let i = 0; i < checkboxList.length; i++) {
            checkboxList[i].checked = false;
          }
        }
        formData.current.weather.no_preference = noPrefValue;
        value = 0;
        formData.current.weather.warm = value;
        formData.current.weather.mild = value;
        formData.current.weather.cold = value;
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
                id="warm"
                onChange={handler}
                value={0}
                defaultChecked={
                  formData.current.weather.warm == 1 ? true : false
                }
              />
              <label htmlFor="warm">Clima quente</label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="option"
                id="mild"
                onChange={handler}
                value={1}
                defaultChecked={
                  formData.current.weather.mild == 1 ? true : false
                }
              />
              <label htmlFor="mild">Clima ameno e temperado</label>
            </div>
            <div className="formCheckbox">
              <input
                type="checkbox"
                name="option"
                id="cold"
                onChange={handler}
                value={2}
                defaultChecked={
                  formData.current.weather.cold == 1 ? true : false
                }
              />
              <label htmlFor="cold">Clima frio e neve</label>
            </div>
          </div>
          <div className="formCheckbox">
            <input
              type="checkbox"
              name="noOption"
              id="noPref"
              onChange={handler}
              value={3}
              defaultChecked={formData.current.weather.no_preference}
            />
            <label htmlFor="noPref">Não tenho preferência</label>
          </div>
        </div>
      </form>
    </Content>
  );
}
