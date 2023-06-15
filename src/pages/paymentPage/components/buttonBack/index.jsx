import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default class ButtonBack extends Component {
    render() {
        return (
          <Link to="/" style={{textDecoration: "none"}}>
            <Container>
              <HiOutlineArrowLeft style={{ fontSize: "30px", marginRight: "20px", color: "#ffff"}}/>
              <p>Voltar para viagens</p>
            </Container>
          </Link>
        );
      }
}