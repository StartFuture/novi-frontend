import React from "react";

import '../assets/css/LandingPageInicio.css'
import LPInicio from '../assets/img/LPInicio.png'

function LandingPageInicio(){
    return (
        <>
            <header className="LP-header">
                <div className="LP-navbar">
                    <img src={LPInicio} alt="Imagem LP Inicio" />
                    <h4> Noví </h4>
                    <button> Entrar/Registrar </button>
                </div>                
            </header>
            <div className="LP-banner">
                <p>Descubra destinos emocionantes para explorar</p>
                <button> Quero viajar  </button>
            </div>
        </>
    )
}

export default LandingPageInicio;
