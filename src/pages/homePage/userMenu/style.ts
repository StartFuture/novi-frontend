import styled from "styled-components";


export const UserMenuLeft = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 20vw;
   height: 100vh;
   padding-left: 55px;
   background-color: #FFF;
   display: none;
   

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

   @media (max-width:900px) {position: absolute;
   top: 50px;
   left: 0;
   z-index: 10;
   width: 295px;
   display: block;
   
   .horizontalLine::after {
      width: 295px;
      
   }
 
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

   @media (max-width:900px) {width: 295px;}
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

   @media (max-width:900px) {width:100%;
   }
`

export const MyProfile = styled.div`
   display: flex;
   flex-direction: row;
   padding: 5px 0;
   margin-left: -55px;


.profilePhotoMobile {display: none;}

   .verticalAlign {
      margin-top: 2px;
      margin-bottom: 20px;
   }

   .verticalAlign input{
      font-size: 18px;
      font-weight: 500;
      border:0;
      outline:0;
      width: 77%;
   }

   .verticalAlign p {
      font-size: 16px;
      font-weight: 400;
      color: #000;
   }
   
   @media (max-width:900px) {width:100vh;


      .profilePhotoMobile {width: 50px;
      height: 50px;
   background-color: ${props => props.theme.colors.primaryColor}};

   }
`
