import React from "react";

import BtnInterviewStartYes from "./components/btnInterviewStartYes/index.jsx";
import BtnInterviewStartLater from "./components/btnIntertviewStartButtonLater/index.jsx";

import StyledButton from "./components/styledButton/index.jsx";

import {FilterStartImage, InterviewStart, InterviewStartImage, InterviewStartWelcome, InterviewStartQuestion, InterviewStartText} from "./styles.ts";

const color = { 
    primary: "#3BB29D",
    white: "#fff",
    black: "#000"
}

const btnYes = {
    text: "Sim",
    link: "/interview",
}

const btnLater = {
    text: "Fazer mais tarde",
    link: "/",
}

function IntertviewStart(){

    return(
        <InterviewStart>
            <FilterStartImage>
                <InterviewStartImage>
                </InterviewStartImage>
            </FilterStartImage>
            <InterviewStartWelcome>
                <InterviewStartQuestion>
                    Vamos iniciar o mapeamento do seu perfil, *Nome* ? 
                </InterviewStartQuestion>
                <InterviewStartText>
                    O mapeamento é importante para conhecermos melhor você, assim escolhendo a viagem perfeita !
                </InterviewStartText>
                {/* <BtnInterviewStartYes/>
                <BtnInterviewStartLater/> */}
                <StyledButton color={color.white} backgroundColor={color.primary} borderColor={color.primary} link={btnYes.link} text={btnYes.text}></StyledButton>
                <br/>
                <StyledButton color={color.primary} backgroundColor={color.white} borderColor={color.primary} link={btnLater.link} text={btnLater.text}></StyledButton>
            </InterviewStartWelcome>
        </InterviewStart>
    )
}


export default IntertviewStart;