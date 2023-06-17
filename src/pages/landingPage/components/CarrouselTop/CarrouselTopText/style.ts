import styled from "styled-components";

export const DivTextFather = styled.div`
  width: 350px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 325px;

  .divTextAlign {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    width: 420px;
    height: 280px;
  }

  .divTextAlign p {
    font-family: ${(props) => props.theme.fonts.fontMontserrat};
    font-weight: 400;
    font-size: 18px;
  }

  .BorderColor {
    border-left: 6px solid;
    border-left-color: ${(props) => props.theme.colors.primaryColor};
    padding-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 400px;
    height: 115px;
  }

  .BorderColor h2 {
    font-family: ${(props) => props.theme.fonts.fontMontserrat};
    font-weight: 700;
    font-size: 42px;
    color: ${(props) => props.theme.colors.primaryColor};
  }

  @media (min-width: 1px) and (max-width: 768px) {
    .divTextAlign {
      width: inherit;
    }
  }

  @media (min-width: 1px) and (max-width: 768px) {
    margin-left: 10%;
  }
`;
