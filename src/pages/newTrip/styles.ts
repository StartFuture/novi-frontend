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
    background-color: #F6F6F6;

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
    overflow : visible;

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
    
    .customBtn {
        min-height: 10%;
        min-width: 10%;
    }

    .customBtn input {
        display: none;
    }

    .checkmark {
        display: block;
        height: 24px;
        width: 24px;
        margin: 10% auto;
        border: 2px solid ${(props) => props.theme.colors.primaryColor};
        border-radius: 50%;
    }

    .customBtn input:checked + .checkmark span {
        display: block;
        height: 12px;
        width: 12px;
        margin: 20% auto 20% auto;
        background-color: ${(props) => props.theme.colors.primaryColor};
        border-radius: 50%;
        transition: opacity 0.5s ease;
    }

    .checkboxContent {
        display: flex;
        justify-content: center;
        padding-top: 5%;
        padding-bottom: 10%;
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

    .customDate {
        display: flex;
        flex-direction: row;
    }

    .customDateInfo {
        padding: 2%;
    }

    .customDateInfo h5 {
        font-size: 18px;
        font-weight: 600;
        color: ${props => props.theme.colors.primaryColor};
    }

    .rowDateInfo p{
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
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
            margin: 5% auto;
        }
    
        .checkboxContent {
            padding-top: 5%;
            padding-bottom: 10%;
        }
        
        small {
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
            height: 6vh;
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
        padding: 30px 40px 0px 30px;

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

        .customBtn {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 8vh;
        }

        .checkmark {
            margin: auto 5% auto 10%;
        }
        
        small {
            font-size: 14px;
        }

        .customDateInfo {
            display: none;
        }

        .checkboxContent {
            padding-top: 0;
            padding-bottom: 0;
            margin: auto 0;
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

export const Calendar = styled.div`
    display:inline-grid;
    justify-content:center;
    align-items:center;
    background:#fff;
    padding:30px 20px 20px 20px;
    border-radius:8px;
    // box-shadow:0px 40px 30px -20px rgba(0,0,0,0.3);
    // position: relative;
    // top: -155px;
    // height: 525px;

    .arrowRPosition {
        position:relative;
        right: -180px;
    }

    .arrowLPosition {
        position:relative;
        right: -140px;
    }

    .month{
        width: 100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:16px;
        margin-bottom:10px;
        font-weight:600;
    }

    .month div{
        font-family: ${props => props.theme.fonts.fontMontserrat};
        font-weight: 600;
        font-size: 16px;
    }
    
    .year{
      font-weight:600;
      margin-left:5px;
    }
    
    .nav{
      display:flex;
      justify-content:center;
      align-items:center;
      text-decoration:none;
      color:#0a3d62;
      width:40px;
      height:40px;
      border-radius:40px;
      transition-duration:.2s;
      position:relative;}
      
      &:hover{
        background:#eee;
      }
    
  
    .days{
        display: grid;
        justify-content:center;
        align-items:center;
        grid-template-columns: repeat(7, 1fr);
        color:#999;
        font-weight:400;
        margin-bottom: 14px;
    }
        
    span{
        width:50px;
        justify-self:center;
        align-self:center;
        text-align:center;
        font-family: ${props => props.theme.fonts.fontMontserrat};
        font-weight: 400;
        font-size: 16px;
    }
    
    .dates{
        display:grid;
        grid-template-columns: repeat(7, 1fr);
    }
        
    .dates button:nth-child(-n + 14) {
        background-color: ${props => props.theme.colors.primaryColor};
        color: white;
    }

    button{
      cursor:pointer;
      outline:0;
      border:0;
      background:transparent;
      font-family: 'Montserrat', sans-serif;
      font-size:16px;
      justify-self:center;
      align-self:center;
      width:50px;
      height:30px;
      border-radius:0px;
      margin: 5px 0px;
      transition-duration:.2s;
    }
      
    &.today{
        box-shadow:inset 0px 0px 0px 2px #0a3d62;
    }
    
    &:first-child{
        grid-column:3;
    }
    
    &:hover{
        background:#eee;
    }
    
    &:focus{
        background:#0a3d62;
        color:#fff;
        font-weight:600;
    }

    @media only screen and (max-device-width: 900px) {

        padding: 20px 10px 10px 10px;

        .month span{
            font-size: 1rem;
        }
        .month div{
            font-size: 1rem;
            margin-left: 2%;
        }

        .days{
            width: 75vw;
            margin-left: 2%;
        }

        .arrowRPosition {
            position:relative;
            left: 35vw;
        }
    
        .arrowLPosition {
            position:relative;
            left: 30vw;
        }

        span{
            width: 10%;
            justify-self:flex-start;
            align-self:flex-start;
            text-align:center;
            font-family: ${props => props.theme.fonts.fontMontserrat};
            font-weight: 400;
            font-size: 12px;
        }

        button{
            width: 100%;
            height: 100%;
            margin: 5px 0px;

            // width:50px;
            // height:30px;
            // margin: 5px 10px;
        }
    }
`