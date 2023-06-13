import styled from "styled-components";



export const PageGrid = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F6F6F6;
`
    

export const LayoutGrid = styled.div`
    display: flex;
    gap: 90px;
    background-color: #F6F6F6;
    @media (max-width: 900px) {display: block;}

`
    

export const MainDiv = styled.div`
    width: 100%;
    height: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin-top: 55px;
   

   .boxImage {width: 81%;
height: 100%;}

.boxImage img {width: 100%;
height: 100%;}



   .pStyle { font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 18px;
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

export const PlaceInfo = styled.div`align-self: flex-start;
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 10px;
width: 82%;
margin-top: 15px;

.boxInfo{
display: flex;
gap: 13px;}

.line {border-top: 1px solid gray;
    width: 70%;
    margin-top: 15px;
}

.placeInfo h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 18px;
   font-weight: 600;
}

   p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 16px;
   font-weight: 500;}

   .users {width: 40px;
display: flex;
align-items: center;
gap: 8px;}

.users .upUserIcon {color: black;}

   .days {width: 90px;
display: flex;
align-items: center;
gap: 8px;}

.days .upCalendarIcon {}`

export const PlaceInfo2 = styled.div`align-self: flex-start;
display: flex;
flex-direction: row;
gap: 10px;
width: 85%;

.boxInfo{
display: flex;
gap: 13px;}

.line {border-top: 1px solid gray;
    width: 72%;
    margin-top: 15px;
}

.placeInfo h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 18px;
   font-weight: 600;
}

   p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 16px;
   font-weight: 500;}

   .users {width: 40px;
display: flex;
align-items: center;
gap: 8px;}

.users .upUserIcon {color: black;}

   .days {width: 90px;
display: flex;
align-items: center;
gap: 8px;}

.days .upCalendarIcon {}`

export const SecondaryDiv = styled.div`
   height: 567px;
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   gap: 13px;
   
   
   @media (max-width: 900px) {border: none;
   width: auto;}
   `


export const Button = styled.button`
 display: flex;
 align-items: center;
 justify-content: center;
  height: 56px;
  width: 275px;
  text-align: center;
  border: none;
  border-radius: 8px;
  background-color:${props => props.theme.colors.primaryColor} ;
  color: white;
  font-family: ${props => props.theme.fonts.fontMontserrat};
  font-size: 18px;
   font-weight: 500;
  cursor: pointer;
  margin-right: 15px;
  
  
  @media (max-width: 900px) {width: 350px;

h2 {text-align: center;}

p {text-align: center;}

}
  `

export const AlignNewTravel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 81%;
  height: 60px;
  border-bottom: 1px solid gray;
  padding-bottom: 20px;
  margin-bottom: 20px;
  
  `

export const InfoTravel = styled.div`
width: 52%;
height: 344px;
background-color: white;
border-radius: 8px;
align-self: flex-start;
padding-bottom: 40px;
margin-top: 35px;


.infoBox {width: 94%;
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


export const Calendar = styled.div`
  display:inline-grid;
  background:#fff;
  padding:20px;
  border-radius:8px;
  box-shadow:0px 40px 30px -20px rgba(0,0,0,0.3);
 height: 515px;
 margin-top: 20px;
 width: 32%;
  


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
    font-weight:300;
  width: 100%;}

    .month div{font-family: ${props => props.theme.fonts.fontMontserrat};
font-weight: 600;
font-size: 16px;
}
    
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
      width:100%;
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
      width:100%;
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

      @media (max-width: 900px)
      { display: none;
        

      }
      
      `

      export const OldTravels = styled.div`
      width: 100%;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 30px;
      
      
      `



      export const CardOldTravel = styled.div`
      height: 48%;
      width: 350px;
      border-radius: 8px;
      display: flex;
      align-items: flex-start;
      background-color: ${props => props.theme.colors.primaryColor};


.boxContent {display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 20px;
    margin-left: 20px;
    width: 220px;
    height: 180px;
    


}

      .firstText {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
    height: 35px;
    background-color: white;
    border-radius: 8px;

    }

    .firstText p {
        font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 500;
      font-size: 16px;
        color: ${props => props.theme.colors.primaryColor};}
      

        .secondText {
            width: 200px;
            
        }

        .secondText h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 600;
      font-size: 20px;
    color: white;}

        .secondText p {font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 500;
      font-size: 16px;
    color: white;}

    .date {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 25px;
    width: 230px;
    }

    .date .calendarIcon {color: white;
    width: 20px;
    height: 20px;}

    .date p {font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 500;
      font-size: 18px;
    color: white;}
      
      `