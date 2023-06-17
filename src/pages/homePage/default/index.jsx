import React, { useState, useEffect } from "react";
import { LayoutGrid, PageGrid, MainDiv, SecondaryDiv, Button, Wrapper } from "../default/style"
import { ImAirplane } from "react-icons/im";
import UserMenu from "../userMenu";
import MenuMobile from "../components/headerMenuMobile"
import UserMenuDesktop from "../userMenu/userMenuDesktop";

import { getUserInfo } from "services/Api";

import { Link } from "react-router-dom";


function DefaultHome() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setUserInfo(res.data.user)
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);
  
  return (      
      <LayoutGrid>
        <MenuMobile isHome="0"></MenuMobile>
        <UserMenuDesktop isHome="0"></UserMenuDesktop>
        <MainDiv>
          <p className="pStyle">Fala <b>{userInfo.name_user}</b>, vamos viajar?</p>
          <SecondaryDiv>
             
            <ImAirplane className="iconAirplane" />
            <h2>Vamos achar a viagem certa para você !</h2>

            <p>Com a entrevista do seu perfil vamos mapear a viagem perfeita.</p>

            <Link to='/new-trip' className="link"><Button>Quero Viajar</Button></Link>


          </SecondaryDiv>

        </MainDiv>




      </LayoutGrid>
   



  )



}

export default DefaultHome






