import styled from "styled-components";


export const UserMenuLeft = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 20vw;
   height: 100vh;
   padding-left: 55px;
   background-color: #FFF;
   position: fixed;

   .LogoNovi h1 {
    font-family: 'Audiowide', cursive;
    color: ${props => props.theme.colors.primaryColor};
    font-size: 48px;
    font-weight: 100;
    padding: 90px 60px 50px 0px;
   }

   .Menu {
    color: ${props => props.theme.colors.lightGreyColor};
    padding: 30px 60px 30px 0px;
    font-size: 18px;
    font-weight: 400;
   }

   .lastContainer{
      margin-top: 44vh;
   }

   .horizontalLine::after {
      margin-top: 37vh;
      display: inline-block;
      content: "";
      border-top: .01rem solid #c1c1c1;
      width: 20vw;
      margin: 0 0 0 -55px;
      transform: translateY(-1rem);
   }
`

export const SelectedContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
   width: 20vw;
   height: 10vh;
   background-color: ${props => props.theme.colors.primaryColor};
   margin-left: -55px;

   p {
      font-size: 16px;
      font-weight: 400;
      color: #FFF;
   }


`

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
   width: 20vw;
   height: 10vh;
   background-color: #FFF;
   margin-left: -55px;

   p {
      color: #000;
   }

   .icon {
      color : #FFF
   }
`

export const MyProfile = styled.div`
   display: flex;
   flex-direction: row;
   padding: 5px 0;
   margin-left: -55px;

   .verticalAlign {
      margin-top: 2px;
   }

   .verticalAlign input{
      font-size: 18px;
      font-weight: 500;
      border:0;
      outline:0;
   }

   .verticalAlign p {
      font-size: 16px;
      font-weight: 400;
      color: #000;
   }
`
