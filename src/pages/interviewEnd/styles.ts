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
    color: ${props => props.theme.colors.primaryColor};
    font-family: ${props => props.theme.fonts.fontMontserrat};
    font-weight: 500;
    font-size: 42px;
    margin-top: 72px;
    margin-bottom: 18px;
}

  p { 
    color: '#000';
    font-family: ${props => props.theme.fonts.fontMontserrat};
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 52px;
  }
`;

export const BackgroundImg = styled.div`
    background-image: url("img/interviewEndBg.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
`;
