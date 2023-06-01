import React from "react";

import { Link } from "react-router-dom";

import { FaUserAlt} from "react-icons/fa"

import { MainContainer, ContainerLeft, LeftImage, Container } from "./styles";

function NewTrip(){
    return(
        <MainContainer>
            <ContainerLeft>
            <LeftImage/>
            </ContainerLeft>
            <Container>
                <h1>A vida é mais leve viajando</h1>
                <p className="tripDetails">Informe mais alguns detalhes sobre sua viagem</p>
                
                <h3>Qual o período que deseja viajar?</h3>
                <div className="displayFlexRow">
                    
                    <label class="container">
                        <input type="radio" name="radio"/>
                        <span class="checkmark"></span>
                        <small>Um final de semana</small> 
                    </label>
                    <label class="container">
                        <input type="radio" name="radio"/>
                        <span class="checkmark"></span>
                        <small>Uma semana</small>
                    </label>
                    <label class="container">
                        <input type="radio" name="radio"/>
                        <span class="checkmark"></span>
                        <small>Personalizado</small>
                    </label>                    
                </div>
               

                <h3>Quantas pessoas vão viajar?</h3>

                <div className="displayFlexRow">
                    <FaUserAlt style={{fontSize: "30px", marginRight: "20px", marginLeft: "10px", color: "#3BB29D"}}/>
                </div>

                <div className="horizontalLine"></div>
                <div className="displayFlexRow">
                    <div className="verticalLine"></div>
                    <div className="displayFlexColumn">
                        <h4>Entrevista Marcelo</h4>
                        <p>Para pesquisar a melhor viagem, levamos em consideração a sua entrevista de perfil</p>
                        <Link to='/editProfile' className="link">
                            <a>Editar Perfil</a>
                        </Link>
                    </div>
                    
                </div>
                
                <br/>
                <input type="button" value="Prosseguir"/>
                <input type="button" value="Voltar"/>
            </Container>
        </MainContainer>
    )
}

export default NewTrip;
