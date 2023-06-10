import styled from "styled-components"


export const BoxComment = styled.div`
width: 650px;
height: 235px;
background-color: white;
border-radius: 8px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
background-color: white;


.upperCard {
    width: 602px;
    height: 71px;
    display: flex;
align-items: center;
flex-direction: row;
gap: 25px;
padding-top: 8px;}

.boxUserImage {width: 71px;
height: 71px;
border-radius: 32px;
border: 1px solid black;
margin-top: 10px;}

.boxUserImage .userImage {width: 71px;
height: 71px;
background-image: url()}


.alignText {}

.alignText h3 {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 18px;
   font-weight: 300;}

.alignText p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 18px;
   font-weight: 500;}

.rating {display: flex;
align-items: center;
flex-direction: row;
gap: 7px;
color: ${props => props.theme.colors.primaryColor};
margin-left: 150px;}

.rating .starSize {height: 25px;
width: 25px;}

.comment {width: 595px;
height: 80%;
padding-top: 20px;
}

.comment p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 18px;
   font-weight: 400;
   max-width: 100%;
   white-space: break-spaces;
   overflow: hidden;
   text-overflow: ellipsis;}

   

   @media (min-width: 1px) and (max-width:768px) {
    height: 317px;
    width: 316px;
    

    .rating {
gap: 2px;
margin-top: 135px;
margin-left: -270px;}

    .rating .starSize {height: 25px;
width: 25px;}

    .comment {width: 260px;
   margin-top: 25px;}

    .comment p {font-size: 14px;}
    

    .upperCard {
    width: 290px;
    height: 85px;
    display: flex;
align-items: center;
flex-direction: row;
gap: 25px;
padding-top: 8px;}
    }
`