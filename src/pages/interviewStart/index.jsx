import React from "react";

import { Link } from "react-router-dom";

function IntertviewStart(){

    return(
        <div>
            <div className="interviewStartImage">
            </div>
            <div className="interviewStartWelcome">
                <h2> Vamos iniciar o mapeamento do seu perfil, *Nome* ? </h2>
                <pre>O mapeamento é importante para conhecermos melhor você, assim escolhendo a viagem perfeita !</pre>
                <button className="btnInterviewStartYes"><Link to='/interview' className="link">Sim</Link></button>
                <button className="btnInterviewStartLater"><Link to='/home' className="link">Fazer mais tarde</Link></button>
            </div>

        </div>
    )
}


export default IntertviewStart;