import React from "react";

import '../assets/css/landingTop.css'

function LandingPageInicio(){
    return (
        <div className="LPHeader">
            <header>
                <div className="LPNavbar">
                    <h4 id="noviLogoNavbar"> Noví </h4>
                    <button className="btnLandingPage"> Entrar/Registrar </button>
                </div>
            </header>
            <div className="LPBanner">
                <p id="bannerPhrase"><b>Descubra</b> destinos emocionantes para explorar</p>
                <button className="btnLandingPage"> Quero viajar > </button>
            </div>
        </div>
    )
}

export default LandingPageInicio;
