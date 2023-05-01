import React from "react";

import { Link } from "react-router-dom";

import { ButtonYes } from './styles.ts'

function BtnInterviewStartYes(){

    return (
        <ButtonYes>
            <Link to='/interview' className="link">
                Sim
            </Link>
        </ButtonYes>
    )
}

export default BtnInterviewStartYes;