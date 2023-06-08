import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-device-width: 900px) {
        flex-direction: column;
    }
`;

export const ContainerLeft = styled.div`
    width: 40%;    
    height: 100%;
    background-color: #FFF;

    @media only screen and (max-device-width: 1570px) {
        width: 35%;
    }

    @media only screen and (max-device-width: 900px) {
        height: 3vh;
        width: 100%;
        background-color: ${props => props.theme.colors.primaryColor}
    }
`

export const LeftImage = styled.div`
    background-image: url("img/interviewStartBG.png");
    background-repeat: no-repeat;
    background-size: contain;
    height: 100vh;
    max-width: 810px;
    width: 70vw;

    @media only screen and (max-device-width: 1570px) {
        max-width: 610px;
    }
    
    @media only screen and (max-device-width: 900px) {
        background-image: none;
    }
`;

export const Container = styled.div`
    width: 70%;
    height: 100vh;
    background-color: #FFF;
    padding: 100px 150px 80px 150px;
    overflow : visible;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -3%;
    margin-left: 2%;

    h2 {
        font-size: 42px;
        font-weight: 700;
        color: ${props => props.theme.colors.primaryColor};
    }

    p {
        font-size: 18px;
        font-weight: 400;
    }
`;