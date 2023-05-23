import React from "react";
import { Container, LeftContainer, MainContainer } from "./styles";
import ButtonBack from "./components/buttonBack";
import TravelType from "./components/TravelType";
import TravelTours from "./components/TravelTours";

function Interview(){
    return(
        <Container>
            <LeftContainer>
                <ButtonBack/>
            </LeftContainer>
            <MainContainer>
                <TravelType/>
                <TravelTours/>
            </MainContainer>
        </Container>
    )
}

export default Interview;