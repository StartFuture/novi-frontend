import styled from "styled-components";

export const MainContainer = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;

  .content {
    width: 100%;
    margin-top: 16.5%;
    margin-left: 8%;
    margin-right: 5.5%;
  }

  h2 {
    color: ${(props) => props.theme.colors.primaryColor};
    font-family: ${(props) => props.theme.fonts.fontMontserrat};
    font-weight: 500;
    font-size: 42px;
    margin-top: 72px;
    margin-bottom: 18px;
  }

  p {
    color: "#000";
    font-family: ${(props) => props.theme.fonts.fontMontserrat};
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 52px;
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;

    .content {
      text-align: center;
      width: 85%;
      padding: 0;
      margin: 0 auto;
      margin-top: 9.5%;
    }

    h2 {
      font-size: 24px;
      margin-top: 24px;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      margin-bottom: 32px;
    }
  }
`;

export const BackgroundImg = styled.div`
  background-image: url("img/interviewEndBg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  @media screen and (max-width: 1100px) {
    height: 46vh;
    padding-top: -80%;
    padding-bottom: 90%;
  }
`;
