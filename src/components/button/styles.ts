import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import { ButtonProps } from "./pattern";

export const Button = styled.button`
    padding: 2% 5%;
    width: 44vw;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    background-color: white;
    content: variant;

    ${({ variant }: ButtonProps) =>
    variant === 'primary' &&
    css`
        background-color: #3BB29D;
        border: 1px solid #3BB29D;
        color: #FFF;
    `
    }
    ${({ variant }: ButtonProps) =>
    variant === 'secondary' &&
    css`
        background-color: #FFF;
        border: 1px solid #3BB29D;
        color: #3BB29D;
    `
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    width: 44.5vw;    
`