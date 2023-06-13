import React, { useState } from "react";
import { LayoutGrid, PageGrid, MainDiv, SecondaryDiv, Button, Wrapper } from "../default/style"
import { ImAirplane } from "react-icons/im";
import UserMenu from "../userMenu";
import MenuMobile from "../components/headerMenuMobile"
import UserMenuDesktop from "../userMenu/userMenuDesktop";






function DefaultHome() {

  
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (

    
      
      <LayoutGrid>
        <MenuMobile></MenuMobile>
        <UserMenuDesktop></UserMenuDesktop>
        <MainDiv>
          <p className="pStyle">Fala <b> Marcelo </b>, vamos viajar?</p>
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






