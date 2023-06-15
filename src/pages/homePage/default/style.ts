import styled from "styled-components";

export const PageGrid = styled.div`
    
`
;

export const LayoutGrid = styled.div`
    
    display: flex;
    gap: 90px;
    background-color: #F6F6F6;
    @media (max-width: 900px) {display: block;}

`
;

export const MainDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin-top: 55px;
  

   .pStyle { font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 16px;
   font-weight: 500;}

   p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 16px;
   font-weight: 700;}
   
   @media (max-width: 900px) {
width: auto;
height: auto;
display: flex;
justify-content: center;
align-items: center;

p {align-self: flex-start;
margin-left: 20px;}
      
   }
   `


export const SecondaryDiv = styled.div`
  height: 567px;
  width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: dotted gray 1px;
  gap: 13px;

  .iconAirplane {
    height: 60px;
    width: 60px;
    color: ${(props) => props.theme.colors.primaryColor};
  }

  h2 {
    font-family: ${(props) => props.theme.fonts.fontMontserrat};
    font-size: 18px;
    font-weight: 600;
  }

   p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 16px;
   font-weight: 500;}
   
   @media (max-width: 900px) {border: none;
   width: auto;}
   `


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 660px;
  text-align: center;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: white;
  font-family: ${(props) => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  
  @media (max-width: 900px) {width: 350px;

h2 {text-align: center;}

p {text-align: center;}

}
  `



 