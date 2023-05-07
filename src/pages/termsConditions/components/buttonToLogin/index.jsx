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
            style={{ fontSize: "20px", paddingTop: "5px", color: "#ffff" }}
          />
          Voltar ao login
        </Container>
      </Link>
    );
  }
}
