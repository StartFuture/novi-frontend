import styled from "styled-components";

import img from './assets/img/interviewStartImage.png';
import imgFilter from './assets/img/interviewStartImageFilter.png';

const primaryColor = '#3BB29D';
const lightGrayColor = '#c1c1c1';
const fontFamilyAudiowide = 'Audiowide';
const fontFamilyCursive = 'cursive';
const fontFamilyMontserrat = 'Montserrat';

export const FilterStartImage = styled.div`
    background-color: #218581;
    background-size: 80vw;
    /* background-image: url(${imgFilter});
    background-repeat: no-repeat;
   
    */
`;

export const InterviewStart = styled.div`
    display: flex;
`;

export const InterviewStartImage = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100vh;
    width: 40vW;
    opacity: .6;
    background-color: #218581;
    /* filter: grayscale(20%); */
`;

export const InterviewStartWelcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InterviewStartQuestion = styled.h2`
    color: ${primaryColor};
    font-family: ${fontFamilyMontserrat};
    font-weight: 500;
    font-size: 32px;
    margin: 0 13%;
`;

export const InterviewStartText = styled.p`
    color: '#000';
    font-family: ${fontFamilyMontserrat};
    font-weight: 400;
    font-size: 14px;
    margin: 2% 13% 5% 13%;
`;