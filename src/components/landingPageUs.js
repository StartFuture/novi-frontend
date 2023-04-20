import React from "react";

import NoviLogo from './NoviLogo';
import '../assets/css/landingPageUs.css'
import LpUs from '../assets/img/LpUs.png'
import LpBackgroundUs from '../assets/img/LpBackgroundUs.png'


function LandingPageUs(){
    return (
        <div className="LPUs">
            <h4>Quem somos nós</h4>
            <NoviLogo />
            <p className="descriptionUs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur et arcu a ullamcorper.
                Morbi fringilla purus quis eros pharetra sollicitudin et in quam. Nam quis rhoncus ipsum, ac varius nibh.
                In mollis mi odio, vel tristique justo imperdiet non. Ut blandit sapien eu elit posuere pellentesque.
                Suspendisse interdum dui a placerat condimentum. Curabitur consequat rutrum egestas. Nulla molestie pharetra
                odio, et molestie elit blandit in. Vivamus id sapien in sem facilisis volutpat sit amet eget neque. Quisque
                eget auctor eros. Nunc posuere diam et tristique efficitur. Proin pharetra magna eros, ullamcorper volutpat
                ipsum suscipit tempor. Integer commodo tortor eu gravida molestie.
            </p>
            <img src={LpUs} alt="Nossa Imagem"/>
            <img src={LpBackgroundUs} alt="Nossa Imagem 2"/>
        </div>
    )
    
}

export default LandingPageUs;