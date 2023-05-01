import React from "react";

import BtnInterviewStartYes from "./components/btnInterviewStartYes/index.jsx";
import BtnInterviewStartLater from "./components/btnIntertviewStartButtonLater/index.jsx";

import {InterviewStart, InterviewStartImage, InterviewStartWelcome, InterviewStartQuestion, InterviewStartText} from "./styles.ts";

function IntertviewStart(){

    return(
        <InterviewStart>
            <InterviewStartImage>
            </InterviewStartImage>
            <InterviewStartWelcome>
                <InterviewStartQuestion>
                    Vamos iniciar o mapeamento do seu perfil, *Nome* ? 
                </InterviewStartQuestion>
                <InterviewStartText>
                    O mapeamento é importante para conhecermos melhor você, assim escolhendo a viagem perfeita !
                </InterviewStartText>
                <BtnInterviewStartYes/>
                <BtnInterviewStartLater/>
            </InterviewStartWelcome>
        </InterviewStart>
    )
}


export default IntertviewStart;