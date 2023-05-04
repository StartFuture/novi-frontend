import React from "react";

import { Button, StyledLink} from './styles.ts';

function StyledButton2(props){
    return(
            <StyledLink to={props.link}>
                <Button variant={props.variant}>{props.text}</Button>
            </StyledLink>
    )
}

export default StyledButton2;