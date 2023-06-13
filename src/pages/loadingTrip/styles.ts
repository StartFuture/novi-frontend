import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-device-width: 900px) {
        flex-direction: column;
    }
`;

export const ContainerLeft = styled.div`
    width: 54%;
    height: 100%;
    background-color: #FFF;

    @media only screen and (max-device-width: 1570px) {
        width: 35%;
    }

    @media only screen and (max-device-width: 900px) {
        height: 40%;
        width: 100%;
    }
`

export const LeftImage = styled.div`
    background-image: url("img/interviewStartBG.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: 30%;
    height: 100vh;
    max-width: 810px;
    width: 100%;

    @media only screen and (max-device-width: 1570px) {
        max-width: 610px;
    }
    
    @media only screen and (max-device-width: 900px) {
        background-position-x: center;
        background-position-y: 45%;
        background-size: cover;
        height: 35vh;
        width: 100.1vw;
        max-width: 1200px;

    }
`;

export const Container = styled.div`
    width: 70%;
    height: 105vh;
    background-color: #FFF;
    padding: 5% 8% 4% 8%;
    overflow : visible;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -3%;

    h2 {
        font-size: 42px;
        font-weight: 700;
        color: ${props => props.theme.colors.primaryColor};
        padding: 2% 0;
    }

    p {
        font-size: 18px;
        font-weight: 400;
    }

    .iconLoader {
        margin-top: 5%;
    }

    @media only screen and (max-device-width: 1570px) {
        h2 {
            font-size: 34px;
        }

        p {
            font-size: 16px;
        }
    }
    
    @media only screen and (max-device-width: 900px) {
        width: 100%;
        height: 45vh;
        margin-top: 0px;
        padding: 5% 8% 4% 8%;

        h2 {
            font-size: 24px;
            padding: 3% 0;
        }

        p {
            font-size: 14px;
        }

        .iconLoader {
            margin-top: 10%;
        }
    }
`;