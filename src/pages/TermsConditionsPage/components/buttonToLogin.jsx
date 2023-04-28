import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {ButtonToLoginStyled} from "../assets/styles/buttonToLoginStyled";
import {AiOutlineArrowLeft} from 'react-icons/ai';

export default class ButtonToLogin extends Component {
  render() {
    return (
        <ButtonToLoginStyled>
          <Link to="/login">
            <AiOutlineArrowLeft />Voltar ao login
          </Link>
        </ButtonToLoginStyled>
    )
  }
}
