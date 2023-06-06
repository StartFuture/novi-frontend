import React from "react";

import { NoviLogo } from "../../components/noviLogo";
import StyledButton from "../../components/button/index";

import { MainContainer, BackgroundImg } from "./styles";

const btnHome = {
  text: "Ir para home",
  link: "/home",
};

export default function InterviewEnd() {
  return (
    <MainContainer>
      <BackgroundImg />
      <div className="content">
        <NoviLogo />
        <h2>
          <strong>* Marcelo *</strong> obrigado pela entrevista !
        </h2>
        <p>Vamos escolher as melhores viagens pra você !</p>
        <StyledButton variant="primary" link={btnHome.link} text={btnHome.text} />
      </div>
    </MainContainer>
  );
}
