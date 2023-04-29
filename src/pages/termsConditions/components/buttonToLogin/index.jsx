import React from "react";
import { Link } from "react-router-dom";

import { ButtonToLoginStyled } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function ButtonToLogin() {
    return (
      <Link to="/login">
        <ButtonToLoginStyled>
          <AiOutlineArrowLeft style={{fontSize: "10px", marginRight: "10px"}}/>
          Voltar ao login
        </ButtonToLoginStyled>
      </Link>
    );
};
