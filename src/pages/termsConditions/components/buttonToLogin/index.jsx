import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default class ButtonToLogin extends Component {
  render() {
    return (
      <Link to="/login">
        <Container>
          <AiOutlineArrowLeft
            style={{ fontSize: "10px", marginRight: "10px" }}
          />
          Voltar ao login
        </Container>
      </Link>
    );
  }
}
