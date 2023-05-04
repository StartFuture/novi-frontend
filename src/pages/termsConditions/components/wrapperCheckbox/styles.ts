import styled from "styled-components";

export const WCStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid ${props => props.theme.colors.lightGreyColor};
`;