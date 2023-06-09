import styled from "styled-components";

export const MainContainer = styled.div`
  display: block;
  max-height: 100vh;
  max-width: 100vw;

  .container {
    display: grid;
    grid-template-columns: 42% 58%;
    min-height: 100vh;
  }
`;

export const BackgroundImage = styled.div`
  background: url("img/interviewStartBG.png") no-repeat left;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 14.5%;
  padding-right: 13.8%;
  padding-top: 37.5%;

  .contentContainer h2 {
    font-size: 42px;
    font-weight: 700;
    color: ${props => props.theme.colors.primaryColor};
    margin-bottom: 2%;
  }

  .contentContainer p {
    font-size: 18px;
    font-weight: 400;
  }
`;
