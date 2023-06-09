import React from "react";

import { useState, useEffect } from "react";

import ClipLoader from "react-spinners/ClipLoader";

import { useNavigate } from 'react-router-dom';

import { api } from "../../services/Api";

import { MainContainer, ContainerLeft, LeftImage, Container } from "./styles";


function LoadingTrip(){

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const trip = JSON.parse(sessionStorage.getItem('trip'));

    const form_values = {
      "trip": trip,
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
        // api.post("/user/user", form_values)
        // .then(
        //     setLoading(false)
        // )
        // .catch((err) => {
        //     console.log("error: " + err);
        // });
    }, [])

    navigate('/resultTrip');
    
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
                    speedMultiplier={.7}
                    className="iconLoader"
                />

            </Container>
            </MainContainer>
        </div>
    )
}

export default LoadingTrip;