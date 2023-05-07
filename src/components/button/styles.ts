import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import { ButtonProps } from "./pattern";

export const Button = styled.button`
    padding: 12px 24px;
    height: 56px;
    width: 100%;
    border-radius: 8px;
    font-size: 18px;
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
        border: none;
        color: #3BB29D;
    `
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    width: 100%;
`