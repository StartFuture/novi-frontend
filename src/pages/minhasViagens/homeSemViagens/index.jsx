import React, { useState } from "react";
import { LayoutGrid, PageGrid, MainDiv, SecondaryDiv, Button, Wrapper, AlignNewTravel, InfoTravel, Calendar, OldTravels, CardOldTravel, PlaceInfo, PlaceInfo2 } from "./style"
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



function HomeSemViagemMarcada() {





    return (


        <PageGrid>
            <LayoutGrid>
                <MenuMobile></MenuMobile>
                <UserMenuDesktop></UserMenuDesktop>
                <MainDiv>
                    <AlignNewTravel>
                        <p className="pStyle">Fala <b> Marcelo </b>, Vamos viajar?</p>
                        <Button>Nova viagem</Button>
                    </AlignNewTravel>
                    <SecondaryDiv>


                        <ImAirplane className="airplaneIcon"></ImAirplane>
                        <h2><b>No momento não tem nenhuma viagem marcada :(</b></h2>
                        <p>Bora viajar?</p>


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

export default HomeSemViagemMarcada
