import React, { useState } from "react";

import { NoviLogo } from "../../components/noviLogo";
import StyledButton from "../../components/button/index";

import { MainContainer, BackgroundImg } from "./styles";

const btnHome = {
  text: "Prosseguir",
  link: "/home",
};

export default function InterviewEnd() {

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setUserInfo(res.data.user)
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return (
    <MainContainer>
      <BackgroundImg />
      <div className="content">
        <NoviLogo />
        <h2>
          <strong>{userInfo.name_user}</strong>, obrigado pela entrevista !
        </h2>
        <p>Vamos escolher as melhores viagens pra você !</p>
        <StyledButton variant="primary" link={btnHome.link} text={btnHome.text} />
      </div>
    </MainContainer>
  );
}
