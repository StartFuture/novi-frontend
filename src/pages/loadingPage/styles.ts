import styled from "styled-components";

export const MainContainer = styled.div`
  display: block;
  max-height: 100vh;
  max-width: 100vw;

  .container {
    display: grid;
    grid-template-columns: 42% auto;
    min-height: 100vh;
  }

  @media screen and (max-width: 1100px) {
    .container {
      grid-template-columns: none;
      grid-template-rows: 37% auto;
    }
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

  .contentContainer h2 {
    font-size: 42px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.primaryColor};
    margin-top: 40%;
    margin-bottom: 2%;
  }

  .contentContainer p {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 7%;
  }

  .loadingIcon {
    margin: 0 45%;
  }

  @media screen and (max-width: 1100px) {
    padding-left: 6.5%;
    padding-right: 6.5%;
    text-align: center;

    .contentContainer h2 {
      font-size: 24px;
    }

    .contentContainer p {
      font-size: 14px;
    }

    .loadingIcon {
      margin: 0 42%;
    }
  }
`;
