import styled from "styled-components";
import React from "react";


export const PageGrid = styled.div`
    width: 100vw;
    height: 100vh;
    
`


export const LayoutGrid = styled.div`
    display: flex;
    gap: 50px;
    background-color: #F6F6F6;
    min-height: 100vh;

`


export const MainDiv = styled.div`
   height: auto;
   width: 80%;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   background-color: #F6F6F6;
   margin-left: 10%;

   .lowerDiv {display: flex;
    width: 81%;
  }
  
  
  .pStyle {border-bottom: 1px solid;
   border-bottom-color: black;
  margin-bottom: 20px;
  padding-bottom: 20px;
  margin-top: 40px;
width: 82%;}

.pStyle p {font-family: ${props => props.theme.fonts.fontMontserrat};
font-size: 24px;
font-weight: 500;}

   p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 24px;
   font-weight: 700;
 }
 
 @media (max-width: 900px) {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  
  .alignFirstP {align-self: flex-start;
  margin-left: 20px;}
        
  .lowerDiv{flex-direction: column;}

  .pStyle {border-bottom: none;
   margin-bottom: 20px;
  width: 90%;}
     }
     
 
 `

export const QuadroDeViagem = styled.div`
width: 82%;
height: 101px;
background-color: ${props => props.theme.colors.primaryColor};
border-radius: 8px;
display: flex;
align-items: center;
justify-content: space-between;



.titleAlign{display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 3px;
width: 230px;
height: 60px;
margin-left: 25px;
}

.titleAlign h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 24px;
   font-weight: 700;
color: white;}

.titleAlign p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 16px;
   font-weight: 400;
   color: white}


   .frameViagem {width: 121px;
   height: 36px;
   background-color: white;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 25px;}

   .frameViagem p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 16px;
   font-weight: 500;
   color: ${props => props.theme.colors.primaryColor};}

   @media (max-width: 900px) {
    width: 100%;
    margin-top: 50px;
    background-color: white;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0px;
    height: 175px;
    justify-content: flex-start;
    gap: 15px;

    
    .frameViagem {background-color: ${props => props.theme.colors.primaryColor};
  margin-left: 25px;}

    .frameViagem p {color: white;}

    .titleAlign {gap: 10px;
      align-items: flex-start;
      margin-top: 25px;
    }

    .titleAlign h2 {
color: black;}

.titleAlign p {
   color: black}
       }
       
`

export const DaysLeft = styled.div`
width: 40%;
height: 130px;
border-radius: 8px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap: 40px;
margin-top: 10px;

.iconAirplane {height: 51px;
width: 51px;
color: ${props => props.theme.colors.primaryColor};}

.daysCount {}

.daysCount h1 {font-family: ${props => props.theme.fonts.fontMontserrat};
color: ${props => props.theme.colors.primaryColor};
font-weight: 700;
font-size: 32px;}

.daysCount p {font-family: ${props => props.theme.fonts.fontMontserrat};
font-weight: 400;
font-size: 16px;
color: black;}

@media (max-width: 900px)
{display: none;}
`
export const DaysLeftMobile = styled.div`
width: 50%;
height: 130px;
border-radius: 8px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap: 40px;
margin-top: 10px;
display: none;

.iconAirplane {height: 35px;
width: 35px;
color: ${props => props.theme.colors.primaryColor};}

.daysCount {}

.daysCount h1 {font-family: ${props => props.theme.fonts.fontMontserrat};
color: ${props => props.theme.colors.primaryColor};
font-weight: 700;
font-size: 26px;}

.daysCount p {font-family: ${props => props.theme.fonts.fontMontserrat};
font-weight: 400;
font-size: 16px;
color: black;}

@media (max-width: 900px)
{display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
height: 165px;
margin-left: 0px;
gap: 18px;
width: 100%;

.daysCount {display: flex;
flex-direction: column;
align-items: center;
justify-content: center;}

.iconAirplane {height: 47px;
  width: 47px;
  }
  

}
`




export const Temperature = styled.div`
width: 50%;
height: 130px;
border-radius: 8px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap: 40px;
margin-top: 10px;



.iconTemperature {height: 51px;
width: 51px;
color: ${props => props.theme.colors.primaryColor};}

.iconUser {height: 51px;
width: 51px;
color: ${props => props.theme.colors.primaryColor};
}

.temperatureDiv {display: flex;
gap: 20px;
align-items:center;
width: 33%}

.temperatureDiv h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
color: ${props => props.theme.colors.primaryColor};
font-weight: 700;
font-size: 32px;}

.usersDiv {display: flex;
    height: 90px;
    width: 45%;
gap: 20px;
border-left: 1px gray solid;
padding-left: 48px;
align-items:center}

.usersDiv h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
color: ${props => props.theme.colors.primaryColor};
font-weight: 700;
font-size: 32px;}

@media (max-width: 900px)
{display: none;}
`


export const TemperatureMobile = styled.div`
width: 50%;
border-radius: 8px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap: 40px;
margin-top: 10px;
display: none;



.iconTemperature {height: 51px;
width: 51px;
color: ${props => props.theme.colors.primaryColor};}

.iconUser {height: 51px;
width: 51px;
color: ${props => props.theme.colors.primaryColor};
}

.temperatureDiv {display: flex;
  flex-direction: column;
gap: 20px;
align-items:center;
width: 33%;
}

.temperatureDiv h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
color: ${props => props.theme.colors.primaryColor};
font-weight: 700;
font-size: 32px;}

.usersDiv {display: flex;
    width: 45%;
gap: 20px;
flex-direction: column;
border-left: 1px gray solid;
padding-left: 48px;
align-items:center}

.usersDiv h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
color: ${props => props.theme.colors.primaryColor};
font-weight: 700;
font-size: 32px;}

@media (max-width: 900px)
{display: flex;
  width: 100%;
  // padding: 0px 5%;
  
  .usersDiv {
    border-left: none;
    padding-left: 0px;
    }
}
`

export const InfoTravel = styled.div`
width: 92%;
height: 344px;
background-color: white;
border-radius: 8px;
align-self: flex-start;
padding-bottom: 40px;


.infoBox {width: 95%;
height: 68px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 8px 8px;
border-left: 8px solid;
border-left-color:${props => props.theme.colors.primaryColor}; }

.infoBox p {font-family: ${props => props.theme.fonts.fontMontserrat};
font-weight: 400;
font-size: 16px;}

.alignItems {display: flex;
flex-direction:column;
gap: 2px;
padding-left: 13px;}

.infoBox .alignItems h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
font-weight: 600;
font-size: 16px;}

.infoBox .alignItems p {font-family: ${props => props.theme.fonts.fontMontserrat};
font-weight: 400;
font-size: 16px;}

@media (max-width: 900px)
{display: none;}
`

export const InfoTravelMobile = styled.div`
width: 100%;
height: 344px;
background-color: white;
border-radius: 8px;
align-self: flex-start;
padding-bottom: 40px;
display: none;
margin-top: 30px;


.infoBox {width: 80%;
height: 68px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 8px 8px;
border-left: 8px solid;
border-left-color:${props => props.theme.colors.primaryColor}; 
padding: 15px;}

.infoBox p {font-family: ${props => props.theme.fonts.fontMontserrat};
font-weight: 400;
font-size: 16px;}

.alignItems {display: flex;
flex-direction:column;
gap: 2px;
padding-left: 13px;}

.infoBox .alignItems h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
font-weight: 600;
font-size: 16px;}

.infoBox .alignItems p {font-family: ${props => props.theme.fonts.fontMontserrat};
font-weight: 400;
font-size: 16px;
}

@media (max-width: 900px)
{
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  background-color: rgb(246, 246, 246);
  align-items: center;


.infoBox{width: 80%;
background-color: white;
border-radius: 8px;
margin: 0px;
}


}
`



export const UpperDiv = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: flex-start;
flex-wrap: wrap;
gap: 25px;


.space {margin-bottom: 20px;}

@media (max-width: 900px)
{flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;

}
`

export const AlignBoxMobile = styled.div`
display: none;

@media (max-width: 900px)
{ width: 80vw;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 5vh;
}


`

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

      @media (max-width: 900px)
      { display: none;
        

      }
      
      `

      export const CalendarMobile = styled.div`
      display:inline-grid;
      background:#fff;
      padding:20px;
      border-radius:8px;
      box-shadow:0px 40px 30px -20px rgba(0,0,0,0.3);
     height: 515px;
     width: 55%;
     margin-top: 20px;
      display: none;
    
    
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

      @media (max-width: 900px)
      { display:inline-grid;
        width: 342px;
        margin-left: 0px;
      }
      
      `