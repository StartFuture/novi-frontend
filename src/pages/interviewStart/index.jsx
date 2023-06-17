import React from "react";

import {
  FilterStartImage,
  InterviewStart,
  InterviewStartImage,
  InterviewStartWelcome,
  InterviewStartQuestion,
  InterviewStartText,
} from "./styles.ts";
import StyledButton from "../../components/button/index.jsx";

const btnYes = {
  text: "Sim",
  link: "/interview",
};

const btnLater = {
  text: "Fazer mais tarde",
  link: "/",
};

function IntertviewStart() {

  const user = JSON.parse(sessionStorage.getItem("user"));
  const name = user.name_user.split(' ')[0];

  return (
    <InterviewStart>
      <FilterStartImage>
        <InterviewStartImage />
      </FilterStartImage>
      <InterviewStartWelcome>
        <InterviewStartQuestion>
          Vamos iniciar o mapeamento do seu perfil, <strong>{name} ?</strong>
        </InterviewStartQuestion>
        <InterviewStartText>
          O mapeamento é importante para conhecermos melhor você, assim
          escolhendo a viagem perfeita !
        </InterviewStartText>
        <StyledButton variant="primary" link={btnYes.link} text={btnYes.text} />
        <br />
        <StyledButton variant="secondary" link={btnLater.link} text={btnLater.text}/>
      </InterviewStartWelcome>
    </InterviewStart>
  );
}

export default IntertviewStart;
