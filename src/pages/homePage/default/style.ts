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
   width: 645px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   



   p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 16px;
   font-weight: 700;}`
;

export const SecondaryDiv = styled.div`
   height: 567px;
   width: 1205px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border: dotted gray 1px;
   gap: 13px;
   

.iconAirplane {height: 60px;
width: 60px;
color: ${props => props.theme.colors.primaryColor};}

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


  export const BoxCarrossel = styled.div`
  width: auto;
  height: auto;
  margin-top: 300px;
margin-left: 300px;

  .slideshow {
    
    margin: 0 auto;
    overflow: hidden;
    max-width: 100%;
    height: 400px;
  }
  
  .slideshowSlider {
    width: 670px;
    height: 600px;
    white-space: nowrap;
    transition: ease 1000ms;
  }
  
  .slide {
    display: inline-block;
  
    height: 400px;
    width: 100%;
    border-radius: 40px;
  }
  
  /* Buttons */
  
  .slideshowDots {
    text-align: center;
  }
  
  .slideshowDot {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
  
    cursor: pointer;
    margin: 15px 7px 0px;
  
    background-color: #c4c4c4;
  }
  
  .slideshowDot.active {
    background-color: #6a0dad;
  }



  `