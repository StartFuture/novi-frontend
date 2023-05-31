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

export const Wrapper =styled.div `
display: flex;
max-width: 1200px;
position: relative;

.father i{
  top: 50%;
  height: 44px;
  width: 44px;
  color: #343F4F;
  cursor: pointer;
  font-size: 1.15rem;
  position: absolute;
  text-align: center;
  line-height: 44px;
  background: #fff;
  border-radius: 50%;
  transform: translateY(-50%);
  transition: transform 0.1s linear;
}
.father i:active{
  transform: translateY(-50%) scale(0.9);
}
.father i:hover{
  background: #f2f2f2;
}
.father i:first-child{
  left: -22px;
  display: none;
}
.father i:last-child{
  right: -22px;
}
.father #carousel{
  font-size: 0px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
}
#carousel.dragging{
  cursor: grab;
  scroll-behavior: auto;
}
#carousel.dragging img{
  pointer-events: none;
}
#carousel img{
  height: 340px;
  object-fit: cover;
  user-select: none;
  margin-left: 14px;
  width: calc(100% / 3);
}
#carousel img:first-child{
  margin-left: 0px;
}`
