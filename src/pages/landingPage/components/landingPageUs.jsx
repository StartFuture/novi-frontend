import React from "react";

import '../assets/css/landingPageUs.css'
import LpUs from '../assets/img/lpUs.png'


function LandingPageUs(){
    return (
        <div className="LPUs">
            <div className="LpUsText">
                <h4 className="h4AboutUs">Quem somos nós</h4>
                <h1 id="noviLogoUs"> Noví </h1>
                <p className="descriptionUs">
                Somos uma empresa recém-criada que se dedica ao setor de viagens e turismo. Nosso objetivo é posicionar-nos
                entre as grandes empresas que oferecem pacotes de viagens.
                Estamos desenvolvendo um site que se concentra em oferecer ao consumidor uma experiência personalizada para
                cada perfil de cliente. Com nossa ferramenta, os clientes podem personalizar sua experiência de viagem de
                acordo com suas preferências, o que garante que cada viagem seja única e perfeita para cada indivíduo.

                </p>
            </div>
                <img className="LpOurImage" src={LpUs} alt="Nossa Imagem"/>
                <div className="LpBackgroundUs"/>
        </div>
    )
    
}

export default LandingPageUs;