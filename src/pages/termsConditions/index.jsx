import React from "react";

import ButtonToLogin from "./components/buttonToLogin/index";
import { NoviLogo } from "../../components/noviLogo";
import Form from "./components/form/index";
import { MainContainer, Container, MainImage} from "./styles";


function TermsConditionsPage() {

  return (
      <MainContainer>
        <MainImage></MainImage>
        <ButtonToLogin />
        <Container>
          <NoviLogo />
          <Form />
        </Container>
      </MainContainer>
  );
}

export default TermsConditionsPage;
