import React from "react";

import { Link } from "react-router-dom";

import '../assets/css/footer.css';
import Facebook from '../assets/svg/facebookFooterIcon.svg';
import Instagram from '../assets/svg/instagramFooterIcon.svg';
import Tiktok from '../assets/svg/tiktokFooterIcon.svg';

export default function Footer(){
    return (
        <div className="footer">
            <div className="logo">
                <h1>Noví</h1>
                <p id="noviDescription">Especialista em viagens personalizada</p>
            </div>
            <div className="doubts">
                <a href="#">Dúvidas frequentes</a>
                <br/>
                <a href="#">Suporte</a>
            </div>
            <div className="socialMedias">
                <Link to='https://www.facebook.com/startfuturebootcamp/' target="_blank" className="link"><img src={Facebook} alt="Icone Facebook" /></Link>
                <Link to='https://www.instagram.com/startfuturebootcamp/' target="_blank" className="link"><img src={Instagram} alt="Icone Instagram" /></Link>
                <Link to='https://www.tiktok.com/@startfuturebootcamp' target="_blank" className="link"><img src={Tiktok} alt="Icone Tiktok" /></Link>
            </div>
        </div>
    )
}