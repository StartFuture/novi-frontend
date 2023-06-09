import React from "react";
import { LayoutGrid, PageGrid, MainDiv, SecondaryDiv, Button, Wrapper } from "../default/style"
import { ImAirplane } from "react-icons/im";
import UserMenu from "../userMenu";
import MenuMobile from "../components/headerMenuMobile";







function DefaultHome() {

  

  

  return (

    
      
      <LayoutGrid>
        <MenuMobile></MenuMobile>
        <UserMenu></UserMenu>
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






