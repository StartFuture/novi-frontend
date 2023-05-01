import React from "react";

import { Button, StyledLink } from './styles.ts';

function StyledButton(props){
    console.log(props);
    return(
        <Button backgroundColor={props.backgroundColor} borderColor={props.borderColor}>
            <StyledLink to={props.link} color={props.color}>
            {props.text}
            </StyledLink>
        </Button>
    )
}

export default StyledButton;