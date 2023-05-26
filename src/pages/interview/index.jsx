import React, { useState } from "react";

import TravelType from "./components/TravelType";
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

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

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
      return <TravelType formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <FavoriteTravelType formData={formData} setFormData={setFormData} />
      );
    } else if (page === 2) {
      return (
        <TravelAccomodation formData={formData} setFormData={setFormData} />
      );
    } else if (page === 3) {
      return (
        <TravelActivities formData={formData} setFormData={setFormData} />
      );
    } else if (page === 4) {
      return (
        <TravelNight formData={formData} setFormData={setFormData} />
      );
    } else if (page === 5) {
      return (
        <TravelInterest formData={formData} setFormData={setFormData} />
      );
    } else if (page === 6) {
      return (
        <InternationalTravel formData={formData} setFormData={setFormData} />
      );
    } else if (page === 7) {
      return (
        <TravelTransportation formData={formData} setFormData={setFormData} />
      );
    } else {
      return <TravelClimate formData={formData} setFormData={setFormData} />;
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
                <a className={page >= 0 ? "active" : ""}>Objetivo</a>
              </li>
              <li>
                <a className={page > 0 ? "active" : ""}>Destino</a>
              </li>
              <li>
                <a className={page > 1 ? "active" : ""}>Passeios</a>
              </li>
              <li>
                <a className={page === 3 ? "active" : ""}>Saúde</a>
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
                  {page === FormTitles.length - 1 ? "Submit" : "Prosseguir"}
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
