import React, { useState } from "react";
import { LayoutGrid, PageGrid, MainDiv, SecondaryDiv, Button, Wrapper, AlignNewTravel, InfoTravel, InfoTravelMobile, Calendar, CalendarMobile, OldTravels, CardOldTravel, CurrentTravel, CardCurrentTravel, PlaceInfo, PlaceInfo2 } from "./style"
import UserMenu from "../../homePage/userMenu";
import MenuMobile from "../../homePage/components/headerMenuMobile"
import UserMenuDesktop from "../../homePage/userMenu/userMenuDesktop";
import { ImAirplane } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
import { AiFillCalendar } from "react-icons/ai"
import { FaUser } from "react-icons/fa"
import LocalMap from "../../../pages/homePage/assets/images/map.svg"

import { Link } from "react-router-dom";

function HomeViagemMarcada() {

    const user = JSON.parse(sessionStorage.getItem("user"));
    const name = user.name_user.split(' ')[0];

    return (
        <PageGrid>
            <LayoutGrid>
                <MenuMobile haveTrip="1" isHome="1"></MenuMobile>
                <UserMenuDesktop haveTrip="1" isHome="1"></UserMenuDesktop>
                <MainDiv>
                    <AlignNewTravel>
                        <p className="pStyle">Fala <b>{name}</b>, tudo pronto para sua viagem?</p>
                        <Link to='/new-trip' className="link"><Button>Nova viagem</Button></Link>
                    </AlignNewTravel>

                    <div className="boxImage">
                        <img src={LocalMap} alt="map-image" />
                    </div>

                    <PlaceInfo>
                        <h2>Rio de Janeiro</h2>
                        <div className="line"></div>
                        <div className="boxInfo">
                            <div className="users">
                                <FaUser className=".upUserIcon"></FaUser>
                                <p>2</p>
                            </div>
                            <div className="days">
                                <AiFillCalendar className=".upCalendarIcon"></AiFillCalendar>
                                <p>14 dias</p>
                            </div>
                        </div>
                    </PlaceInfo>

                    <CurrentTravel>
                        <CardCurrentTravel>
                            <div className="secondText">
                                <h2>Rio de Janeiro</h2>
                                <p>viagem para 2 pessoas</p>
                            </div>

                            <div className="firstText">
                                <p>Praia e litoral</p>
                            </div>

                        </CardCurrentTravel>
                    </CurrentTravel>

                    <SecondaryDiv>

                        <InfoTravel>
                            <div className="infoBox">
                                <div className="alignItems">
                                    <h2>Ida - Avião</h2>
                                    <p><u>Ver detalhes</u></p>
                                </div>
                                <p>02/Jan</p>
                            </div>

                            <div className="infoBox">
                                <div className="alignItems">
                                    <h2>Ida - Avião</h2>
                                    <p><u>Ver detalhes</u></p>
                                </div>
                                <p>02/Jan</p>
                            </div>

                            <div className="infoBox">
                                <div className="alignItems">
                                    <h2>Ida - Avião</h2>
                                    <p><u>Ver detalhes</u></p>
                                </div>
                                <p>02/Jan</p>
                            </div>

                            <div className="infoBox">
                                <div className="alignItems">
                                    <h2>Ida - Avião</h2>
                                    <p><u>Ver detalhes</u></p>
                                </div>
                                <p>02/Jan</p>
                            </div>
                        </InfoTravel>

                        <InfoTravelMobile>
                            <div className="infoBox">
                                <div className="alignItems">
                                    <h2>Ida - Avião</h2>
                                    <p>02/Jan</p>
                                </div>
                                <p className="underlineDetail"><u>Ver detalhes</u></p>
                            </div>

                            <div className="infoBox">
                                <div className="alignItems">
                                    <h2>Ida - Avião</h2>
                                    <p>02/Jan</p>
                                </div>
                                <p className="underlineDetail"><u>Ver detalhes</u></p>
                            </div>

                            <div className="infoBox">
                                <div className="alignItems">
                                    <h2>Ida - Avião</h2>
                                    <p>02/Jan</p>
                                </div>
                                <p className="underlineDetail"><u>Ver detalhes</u></p>
                            </div>

                            <div className="infoBox">
                                <div className="alignItems">
                                    <h2>Ida - Avião</h2>
                                    <p>02/Jan</p>
                                </div>
                                <p className="underlineDetail"><u>Ver detalhes</u></p>
                            </div>

                        </InfoTravelMobile>

                        <Calendar>
                            <div className="month">
                                <div>January
                                    <span className="year">2019
                                    </span>
                                </div>
                                <div className="flexArrow">
                                    <a><IoIosArrowBack className="arrowLPosition"></IoIosArrowBack></a>
                                    <a><IoIosArrowForward className="arrowRPosition"></IoIosArrowForward></a>
                                </div>
                            </div>
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


                            <div className="travelInfoBox">
                                <div className="pointStyle"></div>
                                <div className="alignItems">
                                    <h2>Rio de Janeiro</h2>
                                    <p>14 dias</p>
                                </div>
                            </div>
                        </Calendar>


                        <CalendarMobile>
                            <div className="month">
                                <div>January
                                    <span className="year">2019
                                    </span>
                                </div>
                                <div className="flexArrow">
                                    <a><IoIosArrowBack className="arrowLPosition"></IoIosArrowBack></a>
                                    <a><IoIosArrowForward className="arrowRPosition"></IoIosArrowForward></a>
                                </div>
                            </div>
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


                            <div className="travelInfoBox">
                                <div className="pointStyle"></div>
                                <div className="alignItems">
                                    <h2>Rio de Janeiro</h2>
                                    <p>14 dias</p>
                                </div>
                            </div>
                        </CalendarMobile>




                    </SecondaryDiv>
                    <PlaceInfo2>
                        <h2>Lembra dessa viagem?</h2>
                        <div className="line"></div>

                    </PlaceInfo2>
                    <OldTravels>


                        <CardOldTravel>
                            <div className="boxContent">
                                <div className="firstText">
                                    <p>Praia e litoral</p>
                                </div>
                                <div className="secondText">
                                    <h2>Rio de Janeiro</h2>
                                    <p>viagem para 2 pessoas</p>
                                </div>
                                <div className="date">
                                    <AiFillCalendar className="calendarIcon"></AiFillCalendar>
                                    <p>14/04/2023</p>
                                </div>
                            </div>
                        </CardOldTravel>
                        <CardOldTravel>
                            <div className="boxContent">
                                <div className="firstText">
                                    <p>Praia e litoral</p>
                                </div>
                                <div className="secondText">
                                    <h2>Rio de Janeiro</h2>
                                    <p>viagem para 2 pessoas</p>
                                </div>
                                <div className="date">
                                    <AiFillCalendar className="calendarIcon"></AiFillCalendar>
                                    <p>14/04/2023</p>
                                </div>
                            </div>
                        </CardOldTravel>
                        <CardOldTravel>
                            <div className="boxContent">
                                <div className="firstText">
                                    <p>Praia e litoral</p>
                                </div>
                                <div className="secondText">
                                    <h2>Rio de Janeiro</h2>
                                    <p>viagem para 2 pessoas</p>
                                </div>
                                <div className="date">
                                    <AiFillCalendar className="calendarIcon"></AiFillCalendar>
                                    <p>14/04/2023</p>
                                </div>
                            </div>
                        </CardOldTravel>

                    </OldTravels>

                </MainDiv>
            </LayoutGrid>

        </PageGrid>


    )



}

export default HomeViagemMarcada

