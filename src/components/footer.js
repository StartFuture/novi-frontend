import React from "react";

import '../assets/css/footer.css';
import logo from '../assets/img/logoNovi.png'
import Facebook from '../assets/svg/facebook.svg';
import Instagram from '../assets/svg/instagram.svg';
import Tiktok from '../assets/svg/tiktok.svg';

export default function Footer(){
    return (
        <div className="footer">
            <div className="logo">
                <img src={logo} alt="Logo Novi"/>
                <p id="noviDescription">Especialista em viagens personalizada</p>
            </div>
            <div className="doubts">
                <a href="#">Dúvidas frequentes</a>
                <br/>
                <a href="#">Suporte</a>
            </div>
            <div className="socialMedias">
                <img src={Facebook} alt="Icone Facebook" />
                <img src={Instagram} alt="Icone Instagram" />
                <img src={Tiktok} alt="Icone Tiktok" />
            </div>
        </div>
    )
}