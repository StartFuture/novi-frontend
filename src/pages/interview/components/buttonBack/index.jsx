import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default class ButtonBack extends Component {
    render() {
        return (
          <Link to="/home" style={{textDecoration: "none"}}>
            <Container>
              <AiOutlineArrowLeft style={{ fontSize: "30px", marginRight: "20px", color: "#ffff"}}/>
              <p>Voltar a home</p>
            </Container>
          </Link>
        );
      }
}