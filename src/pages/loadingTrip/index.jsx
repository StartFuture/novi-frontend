import React from "react";

import { useState, useEffect } from "react";

import ClipLoader from "react-spinners/ClipLoader";

import { MainContainer, ContainerLeft, LeftImage, Container } from "./styles";


function LoadingTrip(){

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 10000)
    }, [])
    
    return (
        <div>
            <MainContainer>
            <ContainerLeft>
            <LeftImage/>
            </ContainerLeft>
            <Container>
                <h2> Estamos preparando a sua viagem</h2>
                <p>Seu perfil está sendo analisado e em breve iremos apresentar a viagem perfeita!</p>
                <ClipLoader
                    color={"#3BB29D"}
                    loading={loading}
                    size={50}
                    cssOverride={{marginTop: "5%"}}
                    speedMultiplier={.7}
                />

            </Container>
            </MainContainer>
        </div>
    )
}

export default LoadingTrip;