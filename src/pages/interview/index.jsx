import React, { useState } from "react";

import TravelType from "./components/travelType";
import FavoriteTravelType from "./components/favoriteTravelType";
import TravelAccomodation from "./components/travelAccomodation";
import TravelActivities from "./components/travelActivities";
import TravelNight from "./components/travelNight";
import TravelInterest from "./components/travelInterest";
import InternationalTravel from "./components/internationalTravel";
import TravelTransportation from "./components/travelTransportation";
import TravelClimate from "./components/travelClimate";

import {
  Container,
  LeftContainer,
  MainContainer,
  FormStyled,
  NavStyled,
  Footer,
  ButtonPrev,
  ButtonNext,
} from "./styles";

import ButtonBack from "./components/buttonBack";

function Interview() {
  const allItems = document.querySelectorAll("ul li a");
  allItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      this.classList.add("active");
    });
  });
  const [page, setPage] = useState(0);

  const getFormData = () => {
    var formData = {
      option: {
        travel_destination: 0,
        travel_style: 0,
        accomodation_style: 0,
        night_style: 0,
        can_leave_country: 0,
        transport_style: 0
      },
      activities: {
        water_preference: 0,
        walk_preference: 0,
        historic_preference: 0,
        sport_preference: 0,
        food_preference: 0
      },
      culture: {
        music_preference: 0,
        building_preference: 0,
        tradiction_preference: 0,
        party_preference: 0,
        no_preference: true
      },
      weather: {
        warm: 0,
        mild: 0,
        cold: 0,
        no_preference: 0
      },
      id_user: {}
    }

    var crrFormData = sessionStorage.getItem("currInterview");

    if (crrFormData) {
      formData = JSON.parse(crrFormData);
    }
    return formData;
  }

  const [formData, setFormData] = useState(getFormData());

  const FormTitles = [
    "Qual o tipo de destino você prefere?",
    "Qual é o seu estilo favorito de viagens?",
    "Quais dessas acomodações você prefere?",
    "Quais atividades você mais gosta durante a viagem?",
    "Tem preferência por agitação à noite?",
    "Quais são seus interesses culturais durante uma viagem?",
    "Você topa viajar para fora do seu país?",
    "Quais são suas preferências em relação a transporte durante a viagem?",
    "Qual é a sua preferência em relação ao clima durante a viagem",
  ];

  const activateButton = () => { 

  }

  const PageDisplay = () => {
    if (page === 0) {
      return <TravelType formData={formData} />;
    } else if (page === 1) {
      return (
        <FavoriteTravelType formData={formData} />
      );
    } else if (page === 2) {
      return (
        <TravelAccomodation formData={formData} />
      );
    } else if (page === 3) {
      return (
        <TravelActivities formData={formData} />
      );
    } else if (page === 4) {
      return (
        <TravelNight formData={formData} />
      );
    } else if (page === 5) {
      return (
        <TravelInterest formData={formData} />
      );
    } else if (page === 6) {
      return (
        <InternationalTravel formData={formData} />
      );
    } else if (page === 7) {
      return (
        <TravelTransportation formData={formData} />
      );
    } else {
      return <TravelClimate formData={formData} />;
    }
  };

  return (
    <div>
      <Container>
        <LeftContainer>
          <ButtonBack />
          <NavStyled>
            <ul>
              <li>
                <a className={page >= 0 ? "active" : ""}>Destino</a>
              </li>
              <li>
                <a className={page > 0 ? "active" : ""}>Estilo da viagem</a>
              </li>
              <li>
                <a className={page > 1 ? "active" : ""}>Acomodações</a>
              </li>
              <li>
                <a className={page > 2 ? "active" : ""}>Atividades</a>
              </li>
              <li>
                <a className={page > 3 ? "active" : ""}>Preferência</a>
              </li>
              <li>
                <a className={page > 4 ? "active" : ""}>Interesses culturais</a>
              </li>
              <li>
                <a className={page > 5 ? "active" : ""}>Internacional</a>
              </li>
              <li>
                <a className={page > 6 ? "active" : ""}>Transporte</a>
              </li>
              <li>
                <a className={page > 7 ? "active" : ""}>Clima</a>
              </li>
            </ul>
          </NavStyled>
        </LeftContainer>
        <MainContainer>
          <FormStyled>
            <div className="form-container">
              {/* <div className="header">
                                <h1>{FormTitles[page]}</h1>
                            </div> */}
              <div className="body">{PageDisplay()}</div>
              <Footer>
                <ButtonPrev
                  disabled={page == 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  Voltar
                </ButtonPrev>
                <ButtonNext 
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      alert("FORM SUBMITTED");
                      console.log(formData);

                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                >
                  {page === FormTitles.length - 1 ? "Finalizar" : "Prosseguir"}
                </ButtonNext>
              </Footer>
            </div>
          </FormStyled>
        </MainContainer>
      </Container>
    </div>
  );
}
export default Interview;
