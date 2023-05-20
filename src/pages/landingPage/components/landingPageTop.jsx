import React from "react";

import '../assets/css/landingPageTop.css'

import { Link } from 'react-router-dom';

function LandingPageTop(){
    return (
        <div className="LPHeader">
            <header>
                <div className="LPNavbar">
                    <h4 id="noviLogoNavbar"> Noví </h4>
                    <button className="btnLandingPage"><Link to='/login' className="link">Entrar/Registrar</Link></button>
                </div>
            </header>
            <div className="LPBanner">
                <p id="bannerPhrase"><b>Descubra</b> destinos emocionantes para explorar</p>
                <button className="btnLandingPage"> Quero viajar  </button>
            </div>
        </div>
    )
}

export default LandingPageTop;
