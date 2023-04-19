import React from "react";

import '../assets/css/landingTop.css'

function LandingPageInicio(){
    return (
        <div className="LpHeader">
            <header>
                <div className="LpNavbar">
                    <h4 className="noviLogo"> Noví </h4>
                    <button className="entrarRegistrar"> Entrar/Registrar </button>
                </div>
            </header>
            <div className="LpBanner">
                <p id="bannerPhrase"><b>Descubra</b> destinos emocionantes para explorar</p>
                <button> Quero viajar > </button>
            </div>
        </div>
    )
}

export default LandingPageInicio;
