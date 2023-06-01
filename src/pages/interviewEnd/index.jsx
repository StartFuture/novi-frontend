import React from "react";

import { NoviLogo } from "../../components/noviLogo";
import StyledButton from "../../components/button/index";

import { MainContainer, BackgroundImg } from "./styles";

const btnYes = {
  text: "Ir para home",
  link: "/",
};

export default function InterviewEnd() {
  return (
    <MainContainer>
      <div className="content">
        <NoviLogo />
        <h2>
          <strong>* Marcelo *</strong> obrigado pela entrevista !
        </h2>
        <p>Vamos escolher as melhores viagens pra você !</p>
        <StyledButton variant="primary" link={btnYes.link} text={btnYes.text} />
      </div>
      <div className="image">
        <BackgroundImg />
      </div>
    </MainContainer>
  );
}
