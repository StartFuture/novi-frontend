import styled from "styled-components";

export const MainContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;

  .content {
    width: 794px;
    margin-top: 314px;
    margin-left: 152px;
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
    background-size: fill;
    height: 100%;
    width: 866px;
    margin-left: 108px;
`;
