import styled from "styled-components";

import img from './assets/img/interviewStartImage.png';

const primaryColor = '#3BB29D';
const lightGrayColor = '#c1c1c1';
const fontFamilyAudiowide = 'Audiowide';
const fontFamilyCursive = 'cursive';
const fontFamilyMontserrat = 'Montserrat';


export const InterviewStart = styled.div`
    display: flex;
`;

export const InterviewStartImage = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 80%;
    height: 100vh;
    width: 50vW;
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
    max-width: 45vw;
    margin-left: -10%;
`;

export const InterviewStartText = styled.p`
    color: '#000';
    font-family: ${fontFamilyMontserrat};
    font-weight: 400;
    font-size: 14px;
    max-width: 45vw;
    margin-left: -10%;
    margin-top: 2%;
`;