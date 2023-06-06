import React from "react";
import { LayoutGrid, PageGrid, MainDiv, SecondaryDiv, Button, Wrapper } from "../default/style"
import { ImAirplane } from "react-icons/im";
import { useState } from "react";
import LoggedHome from "../loggedHome";







function DefaultHome() {

  const [travel, setTravel] = useState(0);

  const HomeDisplay = () => {
    if (travel.size > 0) {
    return <LoggedHome></LoggedHome>;
    } else {
    return <><DefaultHome></DefaultHome>;</>;
    }
};

  return (

    <PageGrid>
      <LayoutGrid>

        <MainDiv>
          <p>Fala <b> Marcelo </b>, vamos viajar?</p>
          <SecondaryDiv>
              <div>{HomeDisplay()}</div>
            <ImAirplane className="iconAirplane" />
            <h2>Vamos achar a viagem certa para você !</h2>

            <p>Com a entrevista do seu perfil vamos mapear a viagem perfeita.</p>

            <Button>Quero Viajar</Button>


          </SecondaryDiv>

        </MainDiv>




      </LayoutGrid>
    </PageGrid>



  )



}

export default DefaultHome






