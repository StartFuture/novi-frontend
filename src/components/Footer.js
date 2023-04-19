import React from "react";

import '../assets/css/Footer.css';
import NoviLogo from './NoviLogo';
import Facebook from '../assets/svg/Facebook.svg';
import Instagram from '../assets/svg/Instagram.svg';
import Tiktok from '../assets/svg/Tiktok.svg';

export default function Footer(){
    return (
        <div className="Footer">
            <div className="Logo">
                <NoviLogo />
                <p id="Novi-description">Especialista em viagens personalizada</p>
            </div>
            <div className="Doubts">
                <a href="#">Dúvidas frequentes</a>
                <br/>
                <a href="#">Suporte</a>
            </div>
            <div className="Social-medias">
                <img src={Facebook} alt="Icone Facebook" />
                <img src={Instagram} alt="Icone Instagram" />
                <img src={Tiktok} alt="Icone Tiktok" />
            </div>
        </div>
    )
}