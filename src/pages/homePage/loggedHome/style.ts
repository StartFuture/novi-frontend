import styled from "styled-components";
import React from "react";


export const PageGrid = styled.div`
    width:1920px ;
    height:1080px ;
    background-color: gray;
`
;

export const LayoutGrid = styled.div`
    
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    

*{margin: 0;
    padding: 0;
    box-sizing: border-box;}`
;

export const MainDiv = styled.div`
   height: 1240px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
  justify-content: center;
  



   p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 24px;
   font-weight: 700;
   }`

export const SecondaryDiv = styled.div`
   height: 600px;
   width: 1205px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 13px;
   border: 1px solid red;
   


h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 18px;
   font-weight: 600;}

   p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 16px;
   font-weight: 400;}`
;

export const Button = styled.button`
 display: flex;
 align-items: center;
 justify-content: center;
  height: 56px;
  width: 660px;
  text-align: center;
  border: none;
  border-radius: 8px;
  background-color:${props => props.theme.colors.primaryColor} ;
  color: white;
  font-family: ${props => props.theme.fonts.fontMontserrat};
  font-size: 18px;
   font-weight: 500;
  cursor: pointer;
  margin-top: 20px;`


export const QuadroDeViagem = styled.div`
width: 1205px;
height: 101px;
background-color: ${props => props.theme.colors.primaryColor};
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
gap: 750px;


.titleAlign{display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 3px;
width: 230px;
height: 60px;
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
justify-content: center;}

   .frameViagem p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 16px;
   font-weight: 500;
   color: ${props => props.theme.colors.primaryColor};}
`

export const DaysLeft = styled.div`
width: 386px;
height: 130px;
border-radius: 8px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap: 40px;

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

`




export const Temperature = styled.div`
width: 386px;
height: 130px;
border-radius: 8px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap: 40px;



.iconTemperature {height: 51px;
width: 51px;
color: ${props => props.theme.colors.primaryColor};}

.iconUser {height: 51px;
width: 51px;
color: ${props => props.theme.colors.primaryColor};
}

.temperatureDiv {display: flex;
gap: 20px;
align-items:center;}

.temperatureDiv h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
color: ${props => props.theme.colors.primaryColor};
font-weight: 700;
font-size: 32px;}

.usersDiv {display: flex;
    height: 90px;
gap: 20px;
border-left: 1px gray solid;
padding-left: 48px;
align-items:center}

.usersDiv h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
color: ${props => props.theme.colors.primaryColor};
font-weight: 700;
font-size: 32px;}
`

export const InfoTravel = styled.div`
width: 796px;
height: 344px;
background-color: white;
border-radius: 8px;
align-self: flex-start;
padding-bottom: 40px;


.infoBox {width: 748px;
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


`

export const UpperDiv = styled.div`
position: relative;
width: 1350px;
height: auto;
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 25px;


`

export const Calendar = styled.div`
display:inline-grid;
  justify-content:center;
  align-items:center;
  background:#fff;
  padding:20px;
  border-radius:8px;
  box-shadow:0px 40px 30px -20px rgba(0,0,0,0.3);
  position: relative;
  top: -155px;
  height: 525px;


.arrowRPosition {position:relative;
right: -180px;}

.arrowLPosition {position:relative;
right: -140px;}


  .month{
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:20px;
    margin-bottom:20px;
    font-weight:300;}

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
    font-weight:600;
    margin-bottom:15px;}
    
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
    grid-template-columns: repeat(7, 1fr);}
    
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
      width:50px;
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
      
      .travelInfoBox {width: 321px;
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
      
      `