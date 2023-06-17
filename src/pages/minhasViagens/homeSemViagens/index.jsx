import React, { useState, useEffect } from "react";
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

import { isMobile } from 'react-device-detect';

import { Link } from "react-router-dom";

import { getUserInfo } from "services/Api";


function HomeSemViagemMarcada() {

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        getUserInfo()
        .then((res) => {setUserInfo(res.data.user)})
        .catch((err) => {
            console.log(err)
        });
    }, []);

    return (
        <PageGrid>
            <LayoutGrid>
                <MenuMobile isHome="1"></MenuMobile>
                <UserMenuDesktop isHome="1"></UserMenuDesktop>
                <MainDiv>
                    <AlignNewTravel>
                        <p className="pStyle">Fala <b>{userInfo.name_user}</b>, Vamos viajar?</p>
                        <Link to='/new-trip' className="link"><Button>Nova viagem</Button></Link>
                    </AlignNewTravel>
                    <SecondaryDiv>

                    {
                        isMobile ?
                        <>
                            <ImAirplane className="airplaneIcon"></ImAirplane>
                            <h2><b>Vamos achar a viagem certa para você !</b></h2>
                            <p>Com a entrevista do seu perfil vamos mapear a viagem perfeita.</p>
                        </>
                    :
                        <>
                            <ImAirplane className="airplaneIcon"></ImAirplane>
                            <h2><b>No momento não tem nenhuma viagem marcada :(</b></h2>
                            <p>Bora viajar?</p>
                        </>
                    }
                    


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
