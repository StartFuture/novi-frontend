import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 1106px) {
        flex-direction: column;
    }
            
    //   button {
    //     padding: 5px;
    //     font-size: large;
    //     float: right;
    //     cursor: pointer;
    //   }

    #btnClose {
        color: white;
        border: none;
        background-color: ${(props) => props.theme.colors.primaryColor};
        padding: 18px;
        width: 12vw;
        font-family: ${(props) => props.theme.fonts.fontMontserrat};
        font-size: 18px;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
        white-space: nowrap;

        :hover {
            background-color: #277567;
        }

        @media screen and (max-width: 1550px) {
            width: 100%;
            font-size: 14px;
            padding: 12px 1px;
            width: 86vw;
        }
    }
`;

export const ContainerLeft = styled.div`
    width: 25%;
    height: 100%;
    background-color: #FFF;

    @media only screen and (max-width: 1570px) {
        width: 35%;
    }

    @media only screen and (max-width: 1106px) {
        height: 4vh;
        width: 100vw;
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
    width: 25vw;

    @media only screen and (max-width: 1570px) {
        width: 31vw;
    }
    
    @media only screen and (max-width: 1106px) {
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
            white-space: nowrap;
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
        justify-content: space-between;
        align-items: center;
    }

    .iconsDescription {
        display: inline-block;
        min-width: 130px;

    }

    .peopleIcon {
        font-size: 16px;
        min-width: 15px;
    }

    .calendarIcon {
        font-size: 16px;
        min-width: 15px;
        margin-left: 23%;
    }
    
    small {
        font-size: 16px;
        font-weight: 400;
        position:relative;
        top: -2px;
        left: 8%;
        white-space: nowrap;
    }

    h2 {
        font-size: 32px;
        font-weight: 700;
        white-space: nowrap;
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
            white-space: nowrap;
        }
        
        .horizontalLine {
            margin: 0 4%;
            border-top: 2px solid #CECECE;
            width: 39vw;
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
            width: 90%;
            height: 20%;
        }
        
        .displayFlexColumn {
            display: flex;
            flex-direction: column;
            min-width: 12vw;
            margin-top: 2%;
        }

        .dateTrip {
            font-size: 16px;
            font-weight: 400;
            margin-top: 2%;
            margin-left: 52%;
            min-padding: 0 3%;
        }

        h6 {
            font-size: 16px;
            font-weight: 600;
        }

        .verticalLine {
            border-left: 6px solid var(--primary-color);
            height: 6vh;
            margin-right: 3vw;
            width: 10px;
        }
    
        .showDetailsTrip {
            color: #6e7d9e;
            text-decoration: underline;
            cursor: pointer;
        }
        
    }

    .tripCalendar {
        display: flex;
        flex-direction: row;
        width: 30%;
        margin-left: 3vw
    }

    @media only screen and (max-width: 1570px) {

        padding: 70px 150px 80px 150px;

        .tripInfo {
            padding: 0 2%;
            
            .dateTrip {
                margin-left: 39%;
            }
        }

        .displayFlexColumn {
            margin-top: 0;
        }

        .displayFlexRow {
            margin-bottom: 15%;
        }
    }

    @media only screen and (max-width: 1106px) {
        width: 100%;
        height: 100vh;

        padding: 7% 7% 8%;
        
        .bannerTitle {
            display: block;
        }

        .bannerInfo {
            display: block;
        }

        .bannerBasicInfo {
            display: grid;
            grid-template: 
            "destinyCity"
            "iconsDescription"
            "totalPayment"
            "totalPaymentValue";
            min-width: 100%;
            max-height: 35vh;
            padding: 5% 5%;
            border-radius: 8px;
        }

        .peopleIcon {
            font-size: 14px;
        }
    
        .calendarIcon {
            font-size: 14px;
        }
        
        small {
            font-size: 14px;
        }

        .bannerTitle {
            h4 {
                font-size: 14px;
                padding: 1% 0;
            }
        }

        .totalPayment {
            position: absolute;
            // padding: 5% 0;
            margin: 5vh 0 0;
        }

        h2 {
            font-size: 24px;
        }

        .totalPaymentValue {
            margin-top: 4.5vh;
        }

        .iconsDescription {
            padding: 1% 0;
        }

        .sectionInfo {
            display: none;
        }

        .tripInfo {
            margin-top: 5%;
            display: block;
            min-width: 100%;
            padding: 0;
            background-color: #F6F6F6;
            
            .displayFlexRow {
                width: 100%;
                height: 33%;
                background-color: #FFF;
                border-radius: 8px;
                margin-bottom: 3%;
            }

            .displayFlexColumn {
                // display: flex;
                flex-direction: row;
                // justify-content: space-between;
                min-width: 12vw;
                // max-width: 50vw;
                margin-top: 0;
                padding: 1% 0;

                a {
                    font-size: 14px;
                    margin-left: 4vw;
                    margin-top: 6%;
                    white-space: nowrap;
                }

                h4 {
                    font-size: 14px;
                    min-width: 40vw;
                    // width: 40vw;
                    white-space: nowrap;
                    margin-top: 3%;
                }
            }
            .dateTrip {
                font-size: 12px;
                position: absolute;
                // left: 0;
                margin-top: 8%;
                margin-left: 5.5vw;
                // min-padding: 0 3%;
            }

            .verticalLine {
                height: auto;
                border-radius: 5px 0 0 5px;
            }
        }

    }

`;


export const Calendar = styled.div`
  display:inline-grid;
  background:#fff;
  padding:20px;
  border-radius:8px;
  box-shadow:0px 40px 30px -20px rgba(0,0,0,0.3);
 height: 515px;
 width: 385px;
 margin-top: 20px;
  


.flexArrow {display: flex;
gap: 20px;}


  .month{
    display:flex;
    justify-content:space-between;
    flex-direction: row;
    align-items:center;
    font-size:20px;
    margin-bottom:20px;
    font-weight:300;
  width: 100%;
}

    .month div{font-family: ${props => props.theme.fonts.fontMontserrat};
font-weight: 600;
font-size: 16px;}
    
    .year{
      font-weight:600;
      margin-left:10px;
    }
    
    .nav{
      display:flex;
      justify-content:center;
      align-items:center;
      text-decoration:none;
      color:#0a3d62;
      width: 100%;
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
    font-weight:600;
    margin-bottom:15px;
  width: 100%;}
    
    span{
      width: 100%;
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
  width: 100%}
    
.dates button:nth-child(-n + 14) {background-color: ${props => props.theme.colors.primaryColor};
color: white;}



    button{
      cursor:pointer;
      outline:0;
      border:0;
      background:transparent;
      font-family: 'Montserrat', sans-serif;
      font-size:16px;
      justify-self:center;
      align-self:center;
      width: 100%;
      height:50px;
      border-radius:0px;
      margin: 5px 0px;
      transition-duration:.2s;}
      
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
      
      .travelInfoBox {width: 100%;
      height: 39px;
      display: flex;
      align-items: center;
      gap: 25px;
      margin-top: 25px;
      border-top: 1px solid gray;
        padding: 45px 0px;
    }

      .travelInfoBox .pointStyle {width: 16px;
      height: 16px;
    background-color: ${props => props.theme.colors.primaryColor};
  border-radius: 18px;
  }

      .travelInfoBox .alignItems {display: flex;
      align-items: center;
    flex-direction: column;
  gap: 5px;}

      .travelInfoBox p {font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 400;
      font-size: 14px;}

      .travelInfoBox h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 500;
      font-size: 16px;}

      @media (max-width: 1100px)
      { display: none;
        

      }
      
      `

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
  margin-top: 22%;
  margin-left: 28%;

  @media screen and (max-width: 1550px) {
    margin-top: 10%;
  }

  @media screen and (max-width: 1100px) {
    margin: 47% auto 0;
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const ButtonPrev = styled.button`
  color: ${(props) => props.theme.colors.primaryColor};
  border: none;
  background-color: #F6F6F6;;
  padding: 18px;
  width: 12vw;
  font-family: ${(props) => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  margin-right: 4%;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1550px) {
    font-size: 14px;
    padding: 12px 1px;
    width: 12vw;
  }

  @media screen and (max-width: 1106px) {
    font-size: 12px;
    padding: 12px 1px;
    width: 86vw;
    margin-right: 0;
  }
`;

export const ButtonNext = styled.button`
  color: white;
  border: none;
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: 18px;
  width: 12vw;
  font-family: ${(props) => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;

  :hover {
    background-color: #277567;
  }

  @media screen and (max-width: 1550px) {
    width: 100%;
    font-size: 14px;
    padding: 12px 1px;
    width: 86vw;
  }
`;

