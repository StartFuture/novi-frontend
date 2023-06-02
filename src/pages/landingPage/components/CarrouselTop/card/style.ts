import styled from "styled-components"


export const BoxComment = styled.div`
width: 650px;
height: 235px;
background-color: green;
border-radius: 8px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;


.upperCard {
    width: 602px;
    height: 71px;
    display: flex;
align-items: center;
flex-direction: row;
gap: 25px;}

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


.comment {width: 595px;
height: 88px;
}

.comment p {font-family: ${props => props.theme.fonts.fontMontserrat};
   font-size: 18px;
   font-weight: 400;}


`