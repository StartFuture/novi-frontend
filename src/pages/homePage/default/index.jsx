import React from "react";
import {LayoutGrid, MainDiv, SecondaryDiv, Button

  } from "../default/style"
import {ImAirplane} from "react-icons/im";

import UserMenu from "../userMenu";

  function DefaultHome(){
return(

<LayoutGrid>
<UserMenu/>

<MainDiv>
<h2>Fala <b> Marcelo </b>, vamos viajar?</h2>
<SecondaryDiv>

<ImAirplane className="iconAirplane"/>
<h2>Vamos achar a viagem certa para você !</h2>

<p>Com a entrevista do seu perfil vamos mapear a viagem perfeita.</p>

<Button>Quero Viajar</Button>

</SecondaryDiv>

</MainDiv>




</LayoutGrid>



)



  }

  export default DefaultHome