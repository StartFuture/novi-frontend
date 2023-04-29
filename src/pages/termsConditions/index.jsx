import React from "react";

import {Container} from "./styles";
import ButtonToLogin from "./components/buttonToLogin/index";
import NoviLogo from "../../components/noviLogo";
import Form from "./components/form/index";

function TermsConditionsPage() {
  return (
      <Container>
        <div>
          <ButtonToLogin />
        </div>
        <div>
          <NoviLogo />
          <Form />
        </div>
      </Container>
  );
}

export default TermsConditionsPage;
