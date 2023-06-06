import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaUserAlt} from "react-icons/fa"
import { FaPlus, FaMinus } from "react-icons/fa"

import { MainContainer, ContainerLeft, LeftImage, Container } from "./styles";

function NewTrip(){

    const [numberPeople, setNumberPeople] = useState(1);

    const AddPeople = () => {
        setNumberPeople(numberPeople => numberPeople + 1);
    }

    const RemovePeople = () => {
        if (numberPeople < 2){
            setNumberPeople(1);
        }
        else {
            setNumberPeople(numberPeople => numberPeople - 1);
        }
        
    }

    return(
        <MainContainer>
            <ContainerLeft>
            <LeftImage/>
            </ContainerLeft>
            <Container>
                <h1>A vida é mais leve viajando</h1>
                <p className="tripDetails">Informe mais alguns detalhes sobre sua viagem</p>
                
                <h3>Qual o período que deseja viajar?</h3>
                <div className="displayFlexColumnRow">
                    <label class="container" htmlFor="option1">
                        <div className="customBtn">
                        <input
                            type="radio"
                            name="period"
                            id="option1"
                            value={1}
                        />
                        <div className="checkmark"><span/></div>
                        <small>Um final de semana</small>
                        </div>
                    </label>

                    <label class="container" htmlFor="option2">
                        <div className="customBtn">
                        <input
                            type="radio"
                            name="period"
                            id="option2"
                            value={2}
                        />
                        <div className="checkmark"><span/></div>
                        <small>Uma semana</small>
                        </div>
                    </label>

                    <label class="container" htmlFor="option3">
                        <div className="customBtn">
                        <input
                            type="radio"
                            name="period"
                            id="option3"
                            value={3}
                        />
                        <div className="checkmark"><span/></div>
                        <small>Personalizado</small>
                        </div>
                    </label>            
                </div>
               

                <h3>Quantas pessoas vão viajar?</h3>

                <div className="displayFlexRow">
                    <div className="quantityPeopleTrip">
                        <FaUserAlt className="peopleIcon"/>
                        <span
                        type="number"
                        className="numberPeople"
                        >
                            {numberPeople}
                        </span>
                        {/* <button className="btnPlus" onClick={AddPeople}> */}
                            <FaPlus style={{fontSize: "40px", padding: "9px", color: "#3BB29D"}} className="btnPlus" onClick={AddPeople}/>
                        {/* </button> */}
                        {/* <button className="btnMinus" onClick={RemovePeople}> */}
                        <FaMinus style={{fontSize: "40px", padding: "0px 11px", color: "#3BB29D"}} className="btnMinus" onClick={RemovePeople}/>
                        {/* </button> */}
                        
                    </div>
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
                <div className="btnNavigator">
                    <input className="btnNext" type="submit" value="Prosseguir" />
                    <input
                        className="btnPrevious"
                        type="submit"
                        value="Voltar"
                    />
                </div>
                
            </Container>
        </MainContainer>
    )
}

export default NewTrip;
