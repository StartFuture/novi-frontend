import React, { useState } from "react";
import { LayoutGrid, PageGrid, MainDiv, SecondaryDiv, Button, Wrapper } from "../default/style"
import { ImAirplane } from "react-icons/im";
import UserMenu from "../userMenu";
import MenuMobile from "../components/headerMenuMobile"
import UserMenuDesktop from "../userMenu/userMenuDesktop";






function DefaultHome() {

  const user = JSON.parse(sessionStorage.getItem("user"));
  const name = user.name_user.split(' ')[0];

  
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (

    
      
      <LayoutGrid>
        <MenuMobile haveTrip="0" isHome="0"></MenuMobile>
        <UserMenuDesktop haveTrip="0" isHome="0"></UserMenuDesktop>
        <MainDiv>
          <p className="pStyle">Fala <b>{name}</b>, vamos viajar?</p>
          <SecondaryDiv>
             
            <ImAirplane className="iconAirplane" />
            <h2>Vamos achar a viagem certa para você !</h2>

            <p>Com a entrevista do seu perfil vamos mapear a viagem perfeita.</p>

            <Button>Quero Viajar</Button>


          </SecondaryDiv>

        </MainDiv>




      </LayoutGrid>
   



  )



}

export default DefaultHome






