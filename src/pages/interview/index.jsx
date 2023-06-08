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
        accomodation_style: 0,
        night_style: 0,
        can_leave_country: 0,
        transport_style: 0,
      },
      activities: {
        water_preference: 0,
        walk_preference: 0,
        historic_preference: 0,
        sport_preference: 0,
        food_preference: 0,
      },
      culture: {
        music_preference: 0,
        building_preference: 0,
        tradiction_preference: 0,
        party_preference: 0,
        no_preference: 0,
      },
      weather: {
        warm: 0,
        mild: 0,
        cold: 0,
        no_preference: 0,
      },
      id_user: {},
    };
  
    return (
        <div>
            <Container>
                <LeftContainer>
                    <ButtonBack/>
                    <NavStyled>
                        <ul>
                            <li><a className={page >= 0 ? "active" : ""}>Objetivo</a></li>
                            <li><a className={page > 0 ? "active" : ""}>Destino</a></li>
                            <li><a className={page > 1 ? "active" : ""}>Passeios</a></li>
                            <li><a className={page === 3 ? "active" : ""}>Saúde</a></li>
                        </ul>
                    </NavStyled>
                </LeftContainer>
                <MainContainer>
                    <FormStyled>
                        <div className="form-container">
                            <div className="header">
                                <h1>{FormTitles[page]}</h1>
                            </div> 
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
  export default Interview
