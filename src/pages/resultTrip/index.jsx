import React from "react";

import { Link } from "react-router-dom";

import { FaUserAlt, FaCalendarAlt } from "react-icons/fa";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { 
    MainContainer,
    ContainerLeft,
    LeftImage,
    Container,
    Footer,
    ButtonPrev,
    ButtonNext,
    Calendar,

} from "./styles";

import ButtonBack from "./components/buttonBack";

function LoadingTrip(){
    return (
        <div>
            <MainContainer>
                <ContainerLeft>
                    <LeftImage>
                        <ButtonBack/>
                    </LeftImage>
                </ContainerLeft>
                <Container>
                    <div className="bannerBasicInfo">
                        <div className="bannerTitle">
                            <h4>Rio de Janeiro</h4>
                            <h5>Total a pagar</h5>
                        </div>
                        <div className="bannerInfo">
                            <FaUserAlt className="peopleIcon"/>
                            <small>2</small>
                            <FaCalendarAlt className="calendarIcon"/>
                            <small>14 dias</small>
                            <h2>R$ 5.000,00</h2>
                        </div>                 
                    </div>
                    <div className="sectionInfo">
                        <h3>Rio de Janeiro</h3>
                        <div className="horizontalLine"></div>
                        <FaUserAlt className="peopleIcon"/>
                        <small>2</small>
                        <FaCalendarAlt className="calendarIcon"/>
                        <small>14 dias</small>
                    </div>
                    <div className="sectionTripInfo">
                        <div className="tripInfo">
                            <div className="displayFlexRow">
                                <div className="verticalLine"></div>
                                <div className="displayFlexColumn">
                                    <h4>Ida - Avião</h4>
                                    <Link to='/Tripdetails' className="link">
                                        <a>Ver detalhes</a>
                                    </Link>
                                </div>
                                <p className="dateTrip">02/Jan</p>
                            </div>
                            <div className="displayFlexRow">
                                <div className="verticalLine"></div>
                                <div className="displayFlexColumn">
                                    <h4>Kart - Outdoor</h4>
                                    <Link to='/Tripdetails' className="link">
                                        <a>Ver detalhes</a>
                                    </Link>
                                </div>
                                <p className="dateTrip">02/Jan</p>
                            </div>
                            <div className="displayFlexRow">
                                <div className="verticalLine"></div>
                                <div className="displayFlexColumn">
                                    <h4>Restaurante - Paris 6</h4>
                                    <Link to='/Tripdetails' className="link">
                                        <a>Ver detalhes</a>
                                    </Link>
                                </div>
                                <p className="dateTrip">02/Jan</p>
                            </div>
                            <div className="displayFlexRow">
                                <div className="verticalLine"></div>
                                <div className="displayFlexColumn">
                                    <h4>Volta - Avião</h4>
                                    <Link to='/Tripdetails' className="link">
                                        <a>Ver detalhes</a>
                                    </Link>
                                </div>
                                <p className="dateTrip">02/Jan</p>
                            </div>
                        </div>
                        <div className="tripCalendar">
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
                        </div>
                    </div>
                <Footer>
                    <ButtonPrev>
                        Gerar outra viagem
                    </ButtonPrev>
                    <ButtonNext>
                        Prosseguir
                    </ButtonNext>
                </Footer>
                </Container>
                
            </MainContainer>
        </div>
    )
}

export default LoadingTrip;