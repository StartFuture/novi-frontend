import { AiFillPropertySafety } from "react-icons/ai";
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

    @media only screen and (max-device-width: 1570px) {
        width: 30%;
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
        max-width: 510px;
    }
    
    @media only screen and (max-device-width: 900px) {
        background-image: none;
    }
`;

export const Container = styled.div`
    width: 80%;
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
        margin: 50px auto 20px auto;
        font-size: 16px;
        font-weight: 600;
    }

    .tripDetails {
        font-size: 18px;
        font-weight: 400;
        margin: 10px 0px;
    }

    .displayFlexColumnRow {
        display: flex;
        flex-direction: row;
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

    .peopleIcon {
        font-size: 30px;
        position: relative;
        bottom: 5px;
        margin-right: 20px;
        margin-left: 10px;
        color: #3BB29D;
    }

    .quantityPeopleTrip {
        padding-bottom: 40px;
    }

    .numberPeople {
        font-size: 30px;
        font-weight: 700;
        color: ${props => props.theme.colors.primaryColor};
        position: relative;
        bottom: 7px;
        margin-right: 20px;
        margin-left: -5px;
    }

    .btnPlus {
        padding: 0px 1px;
        border: 2px solid #C1C1C1;
        border-radius: 5px 0px 0px 5px;
        background-color: #FFF;
    }

    .btnMinus {
        padding: 0px 1px;
        border: 2px solid #C1C1C1;
        border-radius: 0px 5px 5px 0px;
        background-color: #FFF;
        margin-left: -1px;
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
        top: 2vh;
        left: 5.3vw;
        height: 25px;
        width: 25px;
        background-color: #FFF;
        border: .1rem solid ${props => props.theme.colors.primaryColor};
        border-radius: 50%;
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

    .btnNavigator {
        position: relative;
        top: 200px;
    }
    
    .btnNext {
        padding: 2.5% 5%;
        width: 100%;
        border: none;
        border-radius: 8px;
        color: white;
        background-color: ${props => props.theme.colors.primaryColor};;
        cursor: pointer;
        font-size: 18px;
        font-weight: 500;
    }

    .btnPrevious {
        padding: 2.5% 5%;
        margin-top: 1vh;
        width: 100%;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        background-color: #F6F6F6;
        color: ${props => props.theme.colors.primaryColor};;
        font-size: 18px;
        font-weight: 500;
    }

    @media only screen and (max-device-width: 1570px) {
        width: 70%;
        height: 100vh;
        padding: 30px 0px 20px 80px;

        h1 {
            font-size: 28px;
        }

        .tripDetails {
            font-size: 14px;
        }

        h3 {
            font-size: 14px;
            margin: 20px 0px;
        }

        .container {
            width: 16vw;
            margin-bottom: 10px;
        }

        .checkmark {
            left: 6.8vw;
        }
        
        small {
            margin: 40px auto 10px auto;
            font-size: 14px;
        }

        .quantityPeopleTrip {
            padding-bottom: 20px;
        }

        .peopleIcon {
            font-size: 20px;
        }

        .numberPeople {
            position: relative;
            bottom: 8px;
            font-size: 23px;
        }

        .btnPlus {
            padding: 0px 0px;
        }
    
        .btnMinus {
            padding: 0px 0px;
            margin-left: -3px;
        }

        .horizontalLine {
            padding: 20px;
            border-top: 2px solid #CECECE;
            width: 52.5vw;
        }

        .verticalLine {
            height: 9.7vh;
        }

        h4 {
            font-size: 14px;
        }

        p {
            font-size: 14px;
        }

        a {
            font-size: 12px;
        }

        .btnNavigator {
            position: relative;
            top: 40px;
        }

        .btnNext {
            padding: 2% 5%;
            width: 85%;
            font-size: 14px;
        }
    
        .btnPrevious {
            padding: 2% 5%;
            width: 85%;
            font-size: 14px;
        }

    }
    
    @media only screen and (max-device-width: 900px) {
        width: 100vw;
        height: 100vh;
        padding: 30px 80px 0px 80px;

        .displayFlexColumnRow {
            flex-direction: column;
        }

        .container {
            flex-direction: row;
            width: 100%;
            height: 8vh;
            cursor: pointer;
            padding-right: 10px;
            margin-bottom: 10px;
        }

        .checkmark {
            top: 40%;
            bottom: 30%;
            left: 7%;
            height: 15px;
            width: 15px;
        }

        h3 {
            margin: 10px 0px;
        }
        
        small {
            margin: auto;
            font-size: 14px;
        }

        .peopleIcon {
            margin-bottom: 2px;
        }

        .numberPeople {
            bottom: 10px;
        }

        .horizontalLine {
            padding: 10px;
            border-top: 2px solid #CECECE;
            margin-left: -80px !important;
            width: 100vw;
        }

        .verticalLine {
            height: 5.5vh;
            margin-right: 3%;
        }

        .btnNavigator {
            position: relative;
            top: 40px;
        }

        .btnNext {
            padding: 3% 8%;
            width: 100%;
        }
    
        .btnPrevious {
            padding: 3% 8%;
            width: 100%;
        }
    }
`;
