import { Link } from "react-router-dom";
import styled from "styled-components";

// import { Link } from "react-router-dom";

export const Button = styled.button`
    background-color: ${(prop) => prop.backgroundColor};
    border: 1px solid ${(prop) => prop.borderColor};
    padding: 2% 5%;
    width: 44vw;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    margin-left: -1%;
`;

export const StyledLink = styled(Link)`
    color: ${(prop) => prop.color};
    text-decoration: none;
    
`