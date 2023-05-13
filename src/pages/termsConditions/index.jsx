import React from "react";

import ButtonToLogin from "./components/buttonToLogin/index";
import { NoviLogo } from "../../components/noviLogo";
import Form from "./components/form/index";
import { MainContainer, Container } from "./styles";
import SecNameEmail from "./components/sectionNameEmailUser";

function TermsConditionsPage() {
  return (
      <MainContainer>
        <ButtonToLogin />
        <Container>
          <NoviLogo />
          <SecNameEmail/>
          <Form />
        </Container>
      </MainContainer>
  );
}

export default TermsConditionsPage;
