import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaUserAlt, FaPlus, FaMinus } from "react-icons/fa";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import validator from 'validator';

import { MainContainer, LeftImage, Container, Calendar } from "./styles";

import { getUserInfo } from "services/Api";

function NewTrip(){

    const navigate = useNavigate();
    
    const [numberPeople, setNumberPeople] = useState(1);
    const [activeCalendar, setActiveCalendar] = useState(false)
    const [tripInfo, setTripInfo] = useState({ period: '', start_date: '', end_date: '', days: '', numberPeople: 0});
    const [periodError, setPeriodError] = useState("");
      
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        getUserInfo()
        .then((res) => {setUserInfo(res.data.user)})
        .catch((err) => {
            console.log(err)
        });
    }, []);

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

    useEffect(() => {
        if (activeCalendar) {
            document.getElementById("calendar").style.display = "block";
            
        }
        else {
            document.getElementById("calendar").style.display = "none";
        }
    });

    const handleBack = (e) => {
        navigate('/home');
      }

    const handleSubmit = (e) => {

        e.preventDefault();
        tripInfo.numberPeople = numberPeople;

        if (validator.isEmpty(tripInfo.period)) {
            setPeriodError("Por favor, insira um periodo!");
            return;
        }

        setPeriodError("");

        if(tripInfo.period === "custom"){
            tripInfo.start_date = "2023-01-01";
            tripInfo.end_date = "2023-01-14";
            tripInfo.days = "14";
        }
        else {
            tripInfo.start_date = "";
            tripInfo.end_date = "";
            tripInfo.days = "";
        }

        sessionStorage.setItem('trip', JSON.stringify(tripInfo));
        navigate('/loading-trip');
    }

    return(
        <MainContainer>
            <LeftImage/>
            <Container>
            <form>
                <h1>A vida é mais leve viajando</h1>
                <p className="tripDetails">Informe mais alguns detalhes sobre sua viagem</p>
                
                <h3>Qual o período que deseja viajar?</h3>
                <div className="displayFlexColumnRow">
                    <label class="container" htmlFor="option1">
                        <div className="customBtn">
                        <input
                            required
                            type="radio"
                            name="period"
                            id="option1"
                            value="weekend"
                            onClick={() => {setActiveCalendar(false)}}
                            onChange={(e) => {setTripInfo({...tripInfo, period: e.target.value})}}
                        />
                        <div className="checkmark"><span/></div>
                        <div className="checkboxContent">
                            <small>Um final de semana</small>
                        </div>
                        </div>
                    </label>

                    <label class="container" htmlFor="option2">
                        <div className="customBtn">
                        <input
                            required
                            type="radio"
                            name="period"
                            id="option2"
                            value="week"
                            onClick={() => {setActiveCalendar(false)}}
                            onChange={(e) => {setTripInfo({...tripInfo, period: e.target.value})}}
                        />
                        <div className="checkmark"><span/></div>
                        <div className="checkboxContent">
                            <small>Uma semana</small>    
                        </div>
                        </div>
                    </label>

                    <label class="container" htmlFor="option3">
                        <div className="customBtn">
                        <input
                            required
                            type="radio"
                            name="period"
                            id="option3"
                            value="custom"
                            onClick={() => {setActiveCalendar(true)}}
                            onChange={(e) => {setTripInfo({...tripInfo, period: e.target.value})}}
                        />
                        <div className="checkmark"><span/></div>
                        <div className="checkboxContent">
                            <small>Personalizado</small>
                        </div>
                        </div>
                    </label>
                </div>
                <small style={{color: "red", marginBottom: "0px"}}>{periodError}</small>
               
                <div id="calendar" style={{display: 'none'}}>
                    <div className="customDate">
                        <div>
                            <Calendar>
                                <div className="month"><div>Janeiro <span className="year">2023</span> <a><IoIosArrowBack className="arrowLPosition"></IoIosArrowBack></a><a><IoIosArrowForward className="arrowRPosition"></IoIosArrowForward></a></div></div>
                                <div className="days">
                                    <span>Seg</span>
                                    <span>Ter</span>
                                    <span>Quar</span>
                                    <span>Quin</span>
                                    <span>Sex</span>
                                    <span>Sab</span>
                                    <span>Dom</span>
                                </div>
                                <div className="dates">
                                    <button>
                                    <time>1</time>
                                    </button>
                                    <button>
                                    <time>2</time>
                                    </button>
                                    <button>
                                    <time>3</time>
                                    </button>
                                    <button>
                                    <time>4</time>
                                    </button>
                                    <button>
                                    <time>5</time>
                                    </button>
                                    <button>
                                    <time>6</time>
                                    </button>
                                    <button>
                                    <time>7</time>
                                    </button>
                                    <button>
                                    <time>8</time>
                                    </button>
                                    <button>
                                    <time>9</time>
                                    </button>
                                    <button>
                                    <time>10</time>
                                    </button>
                                    <button>
                                    <time>11</time>
                                    </button>
                                    <button>
                                    <time>12</time>
                                    </button>
                                    <button>
                                    <time>13</time>
                                    </button>
                                    <button>
                                    <time>14</time>
                                    </button>
                                    <button>
                                    <time>15</time>
                                    </button>
                                    <button>
                                    <time>16</time>
                                    </button>
                                    <button>
                                    <time>17</time>
                                    </button>
                                    <button>
                                    <time>18</time>
                                    </button>
                                    <button>
                                    <time>19</time>
                                    </button>
                                    <button>
                                    <time>20</time>
                                    </button>
                                    <button>
                                    <time>21</time>
                                    </button>
                                    <button>
                                    <time>22</time>
                                    </button>
                                    <button>
                                    <time>23</time>
                                    </button>
                                    <button>
                                    <time>24</time>
                                    </button>
                                    <button>
                                    <time>25</time>
                                    </button>
                                    <button>
                                    <time>26</time>
                                    </button>
                                    <button>
                                    <time>27</time>
                                    </button>
                                    <button>
                                    <time>28</time>
                                    </button>
                                    <button>
                                    <time>29</time>
                                    </button>
                                    <button>
                                    <time>30</time>
                                    </button>
                                    <button>
                                    <time>31</time>
                                    </button>
                                </div>
                            </Calendar>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        <div className="customDateInfo">
                            <h5>Periodo selecionado</h5>
                            <br/>
                            <div className="rowDateInfo">
                                <p>De: <b>01/01/2023</b></p>
                                <br/>
                            </div>
                            <div className="rowDateInfo">
                                <p>Até: <b>14/01/2023</b></p>
                                <br/>
                            </div>
                            <div className="rowDateInfo">
                                <p>Qtd dias: <b>14 dias</b></p>
                                <br/>
                            </div>
                        </div>                    
                    </div>
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
                            <FaPlus style={{fontSize: "40px", padding: "9px", color: "#3BB29D", cursor: "pointer"}} className="btnPlus" onClick={AddPeople}/>
                        {/* </button> */}
                        {/* <button className="btnMinus" onClick={RemovePeople}> */}
                        <FaMinus style={{fontSize: "40px", padding: "0px 11px", color: "#3BB29D", cursor: "pointer"}} className="btnMinus" onClick={RemovePeople}/>
                        {/* </button> */}
                        
                    </div>
                </div>

                <div className="horizontalLine"></div>
                <div className="displayFlexRow">
                    <div className="verticalLine"></div>
                    <div className="displayFlexColumn">
                        <h4>Entrevista {userInfo.name_user}</h4>
                        <p>Para pesquisar a melhor viagem, levamos em consideração a sua entrevista de perfil</p>
                        <Link to='/interview' className="link">
                            <a>Editar Perfil</a>
                        </Link>
                    </div>
                    
                </div>
                
                <br/>
                <div id="btnNavigator" className="btnNavigator">
                    <input className="btnNext" type="submit" value="Prosseguir" onClick={handleSubmit}/>
                    <input
                        className="btnPrevious"
                        type="submit"
                        value="Voltar"
                        onClick={handleBack}
                    />
                </div>
            </form>
                
            </Container>
        </MainContainer>
    )
}

export default NewTrip;
