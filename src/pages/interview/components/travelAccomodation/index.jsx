import React from "react";

import { Content } from "./styles";

export default function TravelAccomodation() {
  return (
    <Content>
      <form>
        <div>
          <h2>Quais dessas acomodações você prefere?</h2>
        </div>
        <div>
        <div className="formCheckbox">
          <input type="checkbox" id="hotelResort"/>
          <label htmlFor="hotelResort">Hotéis de luxo e resorts</label>
        </div>
        <div className="formCheckbox">
          <input type="checkbox" id="inn"/>
          <label htmlFor="inn">Pousadas e acomodações charmosas</label>
        </div>
        <div className="formCheckbox">
          <input type="checkbox" id="houses"/>
          <label htmlFor="houses">Apartamentos e casas de temporada</label>
        </div>
        <div className="formCheckbox">
          <input type="checkbox" id="hostels"/>
          <label htmlFor="hostels">Hostels</label>
        </div>
        <div className="formCheckbox">
          <input type="checkbox" id="camping"/>
          <label htmlFor="camping">Acampamentos e contato direto com a natureza</label>
        </div>
        </div>
      </form>
    </Content>
  );
}
