import React from "react";

import ButtonToLogin from "./components/buttonToLogin/index";
import { NoviLogo } from "../../components/noviLogo";
import Form from "./components/form/index";
import { MainContainer, Container } from "./styles";
import { useLocation } from "react-router-dom";

function TermsConditionsPage() {

  const location = useLocation();
  console.log(location.state);
  console.log(location.state.address);
  console.log(location.state.user);

  return (
      <MainContainer>
        <ButtonToLogin />
        <Container>
          <NoviLogo />
          <Form />
        </Container>
      </MainContainer>
  );
}

export default TermsConditionsPage;
