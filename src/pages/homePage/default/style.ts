import styled from "styled-components";

export const LayoutGrid = styled.div`
    
    display: flex;
    
`
;

export const MainDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   width: 80vw;
   background-color: #f6f6f6;
   padding: 0px 148px;

   h2 {
        font-family: ${props => props.theme.fonts.fontMontserrat};
        font-size: 24px;
        font-weight: 700;
        margin-top: 90px;
        margin-bottom: 20px;
    }


   p {
        font-family: ${props => props.theme.fonts.fontMontserrat};
        font-size: 24px;
        font-weight: 400;
    }
`
;

export const SecondaryDiv = styled.div`
   height: 567px;
   width: 1240px;
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
