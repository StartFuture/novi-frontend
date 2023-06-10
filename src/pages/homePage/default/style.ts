import styled from "styled-components";

export const PageGrid = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  background-color: #f6f6f6;
`;

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  gap: 90px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 55px;

  p {
    font-family: ${(props) => props.theme.fonts.fontMontserrat};
    font-size: 16px;
    font-weight: 700;
  }
`;

export const SecondaryDiv = styled.div`
  height: 567px;
  width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: dotted gray 1px;
  gap: 13px;

  .iconAirplane {
    height: 60px;
    width: 60px;
    color: ${(props) => props.theme.colors.primaryColor};
  }

  h2 {
    font-family: ${(props) => props.theme.fonts.fontMontserrat};
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-family: ${(props) => props.theme.fonts.fontMontserrat};
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 660px;
  text-align: center;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: white;
  font-family: ${(props) => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
`;
