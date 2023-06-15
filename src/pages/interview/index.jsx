import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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
import { postQuiz } from "services/Api";

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
      options: {
        travel_destination: 0,
        travel_style: 0,
        acommodation_style: 0,
        night_style: 0,
        can_leave_country: 0,
        transport_style: 0,
      },
      activitie: {
        water_preference: 0,
        walk_preference: 0,
        historic_preference: 0,
        sport_preference: 0,
        food_preference: 0,
      },
      culture: {
        music_preference: 0,
        building_preference: 0,
        tradicion_preference: 0,
        party_preference: 0,
        no_preference: false,
      },
      weather: {
        warm: 0,
        mild: 0,
        cold: 0,
        no_preference: false,
      }
    };

    var crrFormData = sessionStorage.getItem("currInterview");

    if (crrFormData) {
      formData = JSON.parse(crrFormData);
    }
    return formData;
  };

  const [formData, setFormData] = useState(getFormData());
  const [disableBtn, setDisableBtn] = useState(true);
  const nav = useNavigate();

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

  const PageDisplay = () => {
    if (page === 0) {
      return <TravelType formData={formData} setDisableBtn={setDisableBtn} />;
    } else if (page === 1) {
      return (
        <FavoriteTravelType formData={formData} setDisableBtn={setDisableBtn} />
      );
    } else if (page === 2) {
      return (
        <TravelAccomodation formData={formData} setDisableBtn={setDisableBtn} />
      );
    } else if (page === 3) {
      return (
        <TravelActivities formData={formData} setDisableBtn={setDisableBtn} />
      );
    } else if (page === 4) {
      return <TravelNight formData={formData} setDisableBtn={setDisableBtn} />;
    } else if (page === 5) {
      return (
        <TravelInterest formData={formData} setDisableBtn={setDisableBtn} />
      );
    } else if (page === 6) {
      return (
        <InternationalTravel
          formData={formData}
          setDisableBtn={setDisableBtn}
        />
      );
    } else if (page === 7) {
      return (
        <TravelTransportation
          formData={formData}
          setDisableBtn={setDisableBtn}
        />
      );
    } else {
      return (
        <TravelClimate formData={formData} setDisableBtn={setDisableBtn} />
      );
    }
  };

  return (
    <Container>
      <LeftContainer>
        <ButtonBack />
        <NavStyled>
          <ul>
            <li>
              <a className={page >= 0 ? "act" : ""}>Destino</a>
            </li>
            <li>
              <a className={page > 0 ? "act" : ""}>Estilo da viagem</a>
            </li>
            <li>
              <a className={page > 1 ? "act" : ""}>Acomodações</a>
            </li>
            <li>
              <a className={page > 2 ? "act" : ""}>Atividades</a>
            </li>
            <li>
              <a className={page > 3 ? "act" : ""}>Preferência</a>
            </li>
            <li>
              <a className={page > 4 ? "act" : ""}>Interesses culturais</a>
            </li>
            <li>
              <a className={page > 5 ? "act" : ""}>Internacional</a>
            </li>
            <li>
              <a className={page > 6 ? "act" : ""}>Transporte</a>
            </li>
            <li>
              <a className={page > 7 ? "act" : ""}>Clima</a>
            </li>
          </ul>
        </NavStyled>
      </LeftContainer>
      <MainContainer>
        <FormStyled>
          <div className="header">
            <h2>{FormTitles[page]}</h2>
          </div>
          <div className="body">{PageDisplay()}</div>
        </FormStyled>
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
            disabled={disableBtn}
            style={{ backgroundColor: !disableBtn ? "" : "gray" }}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                console.log(formData)
                postQuiz(formData).then((ress) => {
                  console.log(ress.data);
                });
                nav("/interview-end");
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Finalizar" : "Prosseguir"}
          </ButtonNext>
        </Footer>
      </MainContainer>
    </Container>
  );
}
export default Interview;
