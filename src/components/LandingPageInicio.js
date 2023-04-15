import React from "react";

import '../assets/css/LandingPageInicio.css'

function LandingPageInicio(){
    return (
        <div className="LP-header">
            <header>
                <div className="LP-navbar">
                    <h4 className="NoviLogo"> Noví </h4>
                    <button className="EntrarRegistrar"> Entrar/Registrar </button>
                </div>
            </header>
            <div className="LP-banner">
                <p><b>Descubra</b> destinos emocionantes para explorar</p>
                <button> Quero viajar  </button>
            </div>
        </div>
    )
}

export default LandingPageInicio;
