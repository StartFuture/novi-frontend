import React from "react";

import { Link } from "react-router-dom";

import { ButtonLater } from "./styles.ts";

function BtnInterviewStartLater(){

    return (
        <ButtonLater>
            <Link to='/home' className="link">
                Fazer mais tarde
            </Link>
        </ButtonLater>
    )
}

export default BtnInterviewStartLater;