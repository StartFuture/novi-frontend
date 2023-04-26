import React from "react";

import '../assets/css/landingPageUs.css'
import LogoNoviUs from '../assets/img/LogoNoviUs.png'
import LpUs from '../assets/img/lpUs.png'


function LandingPageUs(){
    return (
        <div className="LPUs">
            <div className="LpUsText">
                <h4 className="h4AboutUs">Quem somos nós</h4>
                <img className="LogoNoviUs" src={LogoNoviUs} alt="Logo Novi"/>
                <p className="descriptionUs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur et arcu a ullamcorper.
                    Morbi fringilla purus quis eros pharetra sollicitudin et in quam. Nam quis rhoncus ipsum, ac varius nibh.
                    In mollis mi odio, vel tristique justo imperdiet non. Ut blandit sapien eu elit posuere pellentesque.
                    Suspendisse interdum dui a placerat condimentum. Curabitur consequat rutrum egestas. Nulla molestie pharetra
                    odio, et molestie elit blandit in.
                </p>
            </div>
                <img className="LpOurImage" src={LpUs} alt="Nossa Imagem"/>
                <div className="LpBackgroundUs"/>
        </div>
    )
    
}

export default LandingPageUs;