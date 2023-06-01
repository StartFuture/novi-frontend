import { AiFillPropertySafety } from "react-icons/ai";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ContainerLeft = styled.div`
    width: 40vw;    
    height: 100vh;
`

export const LeftImage = styled.div`
    background-image: url("img/interviewStartBG.png");
    background-repeat: no-repeat;
    background-size: fill;
    height: 100vh;
    max-width: 810px;
    width: 70vw;
`;

export const Container = styled.div`
    width: 80vw;
    height: 100vh;
    background-color: #F6F6F6;
    padding: 100px 150px 80px 150px;

    h1 {
        font-size: 42px;
        font-weight: 700;
        color: ${props => props.theme.colors.primaryColor};
    }

    p {
        font-size: 16px;
        font-weight: 400;
    }

    h3 {
        font-size: 18px;
        font-weight: 500;
        margin: 30px 0px;
    }

    h4 {
        font-size: 16px;
        font-weight: 600;
    }

    a {
        color: #6e7d9e;
        text-decoration: underline;
        margin-top: 5px;
    }

    small {
        margin: 30px auto 20px auto;
        font-size: 16px;
        font-weight: 600;
    }

    .tripDetails {
        font-size: 18px;
        font-weight: 400;
        margin: 10px 0px;
    }

    .displayFlexRow{
        display: flex;
        flex-direction: row;
    }

    .displayFlexColumn {
        display: flex;
        flex-direction: column;
    }

    .tripPeriod {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .container {
        display: flex;
        flex-direction: column;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 12vw;
        cursor: pointer;
        margin-right: 30px;
        margin-bottom: 30px;
        background-color: #FFF;
        border: 1px solid #C1C1C1;
        border-radius: 16px;
    }
      
    /* Hide the browser's default radio button */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }
      
    /* Create a custom radio button */
    .checkmark {
        position: relative;
        top: 0;
        left: 5.3vw;
        height: 25px;
        width: 25px;
        background-color: #FFF;
        border: .1rem solid ${props => props.theme.colors.primaryColor};
        border-radius: 50%;
        margin-top: 20px;
    }
    
    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
        background-color: ${props => props.theme.colors.primaryColor};;
    }
      
    /* When the radio button is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: ${props => props.theme.colors.primaryColor};;
    }

    .horizontalLine {
        padding: 20px;
        border-top: 2px solid #CECECE;
        width: 39vw;
    }

    .verticalLine {
        border-left: 6px solid var(--primary-color);
        height: 6vh;
        margin-right: 3%;
    }
`;
