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
   
   

   .boxImage {width: 81%;
height: 100%;}

.boxImage img {width: 100%;
height: 100%;}



   .pStyle { font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 18px;
   font-weight: 500;}

   .pStyle p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 16px;
   font-weight: 700;}
   
   @media (max-width: 900px) {
display: flex;
justify-content: center;
align-items: center;

.pStyle p {align-self: flex-start;
  font-size: 18px;
margin-left: 20px;}

.boxImage {display: none;}
  
  .boxImage img {display: none;}
      
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

.days .upCalendarIcon {}

@media (max-width: 900px)
{display: none;}
`

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
   
   
   @media (max-width: 900px) {flex-direction: column;
    margin: 20px 0px;
    height: auto;
   }
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
  
  
  @media (max-width: 900px) {width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;

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
  margin-top: 40px;

  @media (max-width: 900px)
{border: none;}

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

export const OldTravels = styled.div`
      width: 85%;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 30px;
      
      @media (max-width: 900px)
      {width: 75%;
      margin-right: 60px;}
      
      `



export const CardOldTravel = styled.div`
      height: 48%;
      width: 100%;
      border-radius: 8px;
      display: flex;
      align-items: flex-start;
      background-color: ${props => props.theme.colors.primaryColor};


.boxContent {display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 20px;
    margin-left: 20px;
    width: 100%;
    height: 180px;
    


}

      .firstText {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
    height: 35px;
    background-color: white;
    border-radius: 8px;

    }

    .firstText p {
        font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 500;
      font-size: 16px;
        color: ${props => props.theme.colors.primaryColor};
      }
      

        .secondText {
            width: 90%;
            
        }

        .secondText h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 600;
      font-size: 20px;
    color: white;
    max-width: 100%;
    white-space: break-spaces;
    overflow: hidden;
    text-overflow: ellipsis;}

        .secondText p {font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 500;
      font-size: 16px;
    color: white;
    max-width: 100%;
    white-space: break-spaces;
    overflow: hidden;
    text-overflow: ellipsis;}

    .date {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 25px;
    width: 100%;
    }

    .date .calendarIcon {color: white;
    width: 20px;
    height: 20px;}

    .date p {font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 500;
      font-size: 18px;
    color: white;}
      

    @media (max-width: 900px)
      {width: 35%;
      display: flex;


      .firstText {
        width: 60%;
    }

    .boxContent {
      margin-top: 7px;
      margin-left: 7px;
      }
    }
      `


export const CurrentTravel = styled.div`
      width: 90%;
      height: 400px;
      align-items: center;
      justify-content: center;
      gap: 30px;
      display: none;
      
      @media (max-width: 900px)
      {display: flex;
      }
      
      `



export const CardCurrentTravel = styled.div`
      height: 60%;
      width: 100%;
      border-radius: 8px;
      display: none;
      align-items: flex-start;
      background-color: white;
      


.boxContent {display: flex;
    gap: 7px;
    margin-top: 20px;
    margin-left: 20px;
    width: 100%;
    height: 180px;
    


}

      .firstText {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 80%;
    height: 35px;
    background-color: ${props => props.theme.colors.primaryColor};
    border-radius: 8px;
    margin-left: 25px;
    

    }

    .firstText p {
        font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 500;
      font-size: 16px;
        color: white;
        text-align: center;
      }
      

        .secondText {
          display: flex;
          flex-direction: column;
          gap: 10px;
            width: 90%;
            margin-top: 20px;
            margin-left: 25px;
            
        }

        .secondText h2 {font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 600;
      font-size: 20px;
    color: black;}

        .secondText p {font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 500;
      font-size: 16px;
    color: black;}

    .date {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 25px;
    width: 100%;
    }

    .date .calendarIcon {color: white;
    width: 20px;
    height: 20px;}

    .date p {font-family: ${props => props.theme.fonts.fontMontserrat};
      font-weight: 500;
      font-size: 18px;
    color: white;}
      

    @media (max-width: 900px)
      {width: 65%;
        display: flex;
        flex-direction: column;
        gap: 30px;


      .firstText {
        width: 60%;
    }

    .boxContent {
      margin-top: 7px;
      margin-left: 7px;
      }
    
      .date {
        display: none;
    }
    
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
        margin-left: 60px;
      }
      
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