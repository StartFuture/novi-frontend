import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default class ButtonToLogin extends Component {
  render() {
    return (
      <Link to="/login" style={{textDecoration: "none"}}>
        <Container>
          <AiOutlineArrowLeft style={{ fontSize: "30px", marginRight: "5px",color: "#ffff"}}/>
          <p>Voltar ao login</p>
        </Container>
      </Link>
    );
  }
}
