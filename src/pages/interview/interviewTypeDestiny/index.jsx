import React from "react";
import { Container, LeftContainer, MainContainer } from "./styles";
import ButtonBack from "./components/buttonBack";
import Form from "./components/form";

function InterviewTypeDestiny(){
    return(
        <Container>
            <LeftContainer>
                <ButtonBack/>
            </LeftContainer>
            <MainContainer>
                <Form/>
            </MainContainer>
        </Container>
    )
}

export default InterviewTypeDestiny;