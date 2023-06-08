import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-device-width: 900px) {
        flex-direction: column;
    }
`;

export const ContainerLeft = styled.div`
    width: 25%;
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
    background-size: cover;
    background-position-x: center;
    background-position-y: 30%;
    min-height: 100vh;
    // max-width: 410px;
    width: 25vw;
    // margin-top: -4.5%;

    @media only screen and (max-device-width: 1570px) {
        max-width: 410px;
    }
    
    @media only screen and (max-device-width: 900px) {
        background-image: none;
    }
`;

export const Container = styled.div`
    width: 75%;
    height: 100vh;
    background-color: #F6F6F6;
    padding: 100px 150px 80px 150px;
    overflow : visible;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .bannerBasicInfo {
        display: flex;
        flex-direction: column;
        background-color: #FFF;
        padding: 3% 2%;
        width: 100%;
    }

    .bannerTitle {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h4 {
            font-size: 18px;
            font-weight: 600;
        }

        h5 {
            font-size: 16px;
            font-weight: 400;
            margin-right: 10%;
        }
    }

    .bannerInfo {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .peopleIcon {

    }

    .calendarIcon {
        margin-left: 2%;
    }
    
    small {
        font-size: 16px;
        font-weight: 400;
        margin-left: 1%;
    }

    h2 {
        font-size: 32px;
        font-weight: 700;
        margin-left: 68%;
    }

    .sectionInfo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 3% 1%;
        width: 100%;
        
        h3 {
            font-size: 24px;
            font-weight: 600;
        }
        .horizontalLine {
            margin: 0 4%;
            border-top: 2px solid #CECECE;
            width: 37vw;
        }
    }

    .sectionTripInfo {
        display: flex;
        flex-direction: row;
        width: 100%;
        // justify-content: space-between;
    }

    .tripInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 60%;
        padding: 2% 2%;
        background-color: #FFF;

        .displayFlexRow {
            display: flex;
            flex-direction: row;
            margin-bottom: 1%;
        }
        
        .displayFlexColumn {
            display: flex;
            flex-direction: column;
            min-width: 10vw;
            margin-top: 2%;
        }

        .dateTrip {
            font-size: 16px;
            font-weight: 400;
            margin-top: 2%;
            margin-left: 59%;
        }

        h6 {
            font-size: 16px;
            font-weight: 600;
        }

        .verticalLine {
            border-left: 6px solid var(--primary-color);
            height: 6vh;
            margin-right: 3%;
        }
    
        a {
            color: #6e7d9e;
            text-decoration: underline;
        }
    }

    .tripCalendar {
        display: flex;
        flex-direction: row;
        width: 30%;
        margin-left: 3vw
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

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
  margin-top: 22%;
  margin-left: 28%;

  @media screen and (max-width: 1100px) {
    margin: 0 auto;
    margin-top: 4%;
    width: 80%;
    flex-direction: column-reverse;
  }
`;

export const ButtonPrev = styled.button`
  color: ${(props) => props.theme.colors.primaryColor};
  border: none;
  background-color: #F6F6F6;;
  padding: 16px;
  width: 12vw;
  font-family: ${(props) => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    font-size: 14px;
    padding: 12px 24px 12px 24px;
  }
`;

export const ButtonNext = styled.button`
  color: white;
  border: none;
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: 16px;
  width: 12vw;
  font-family: ${(props) => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: #277567;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    font-size: 14px;
    padding: 12px 24px 12px 24px;
  }
`;