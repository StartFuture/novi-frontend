import React from "react";

import { NoviLogo } from "../../components/noviLogo";
import StyledButton from "../../components/button/index";

import { MainContainer, BackgroundImg } from "./styles";

const btnHome = {
  text: "Prosseguir",
  link: "/home",
};

export default function InterviewEnd() {

  const user = JSON.parse(sessionStorage.getItem("user"));
  const name = user.name_user.split(' ')[0];

  return (
    <MainContainer>
      <BackgroundImg />
      <div className="content">
        <NoviLogo />
        <h2>
          <strong>{name}</strong>, obrigado pela entrevista !
        </h2>
        <p>Vamos escolher as melhores viagens pra você !</p>
        <StyledButton variant="primary" link={btnHome.link} text={btnHome.text} />
      </div>
    </MainContainer>
  );
}
