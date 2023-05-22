import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export const LeftContainer = styled.div`
    width: 35vw;
    background-color: ${props => props.theme.colors.primaryColor};
    height: 100vh;
`;

export const MainContainer = styled.div`
    width: 70vw;
    height: 100vh;
`;