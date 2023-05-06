import styled from "styled-components";

const primaryColor = '#3BB29D';
const fontFamilyMontserrat = 'Montserrat';

export const FilterStartImage = styled.div`
    background-color: #218581;
    background-size: 80vw;
`;

export const InterviewStart = styled.div`
    display: flex;
`;

export const InterviewStartImage = styled.div`
    background-image: url("img/interviewStartBG.png");
    background-repeat: no-repeat;
    background-size: fill;;
    height: 100vh;
    max-width: 810px;
    width: 100vw;
    opacity: .6;
    background-color: #218581;
    /* filter: grayscale(20%); */
`;

export const InterviewStartWelcome = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 795px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InterviewStartQuestion = styled.h2`
    color: ${primaryColor};
    font-family: ${fontFamilyMontserrat};
    font-weight: 500;
    font-size: 42px;
    margin-bottom: 16px;
`;

export const InterviewStartText = styled.p`
    color: '#000';
    font-family: ${fontFamilyMontserrat};
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 48px;
`;