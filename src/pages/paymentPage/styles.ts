import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  display: flex;
  background-color: #f6f6f6;

  @media screen and (max-width: 1100px) {
    display: block;

    ::before {
      content: "";
      background-color: ${(props) => props.theme.colors.primaryColor};
      width: 100vw;
      height: 33px;
      display: block;
    }
  }
`;

export const LeftContent = styled.div`
  background: url("img/interviewStartBG.png") no-repeat left;
  background-size: cover;
  min-height: 100%;
  width: 22.2%;

  @media screen and (max-width: 1340px) {
    width: 42.2%;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 77.5%;
  margin-top: 5%;
  padding-left: 7%;
  padding-right: 8%;

  .travelInfo {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 2%;
    background-color: white;
    border-radius: 8px;
    padding: 34px 24px;
  }

  .travelInfo ul {
    list-style: none;
    margin-top: 16.5%;
  }

  .travelInfo ul li {
    margin-bottom: 5%;
  }

  .travelInfo p {
    font-size: 32px;
    font-weight: 700;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const PaymentMethods = styled.div`
  margin-top: 3.5%;

  .methods {
    margin-bottom: 1.4%;
    border-radius: 16px;
    background-color: white;
    border: 1px solid ${(props) => props.theme.colors.lightGreyColor};
  }

  .formCheckbox {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    align-items: center;
  }

  .customBtn {
    min-height: 100%;
    min-width: 10%;
  }

  .customBtn input {
    display: none;
  }

  .checkmark {
    display: block;
    height: 24px;
    width: 24px;
    margin: 50% auto;
    border: 2px solid ${(props) => props.theme.colors.primaryColor};
    border-radius: 50%;
  }

  .customBtn input:checked + .checkmark span {
    display: block;
    height: 12px;
    width: 12px;
    margin: 20% auto 20% auto;
    background-color: ${(props) => props.theme.colors.primaryColor};
    border-radius: 50%;
    transition: opacity 0.5s ease;
  }

  .contentContainer {
    width: 100%;
  }

  .checkboxContent {
    display: flex;
    align-items: center;
  }

  .checkboxContent h3 {
    font-size: 18px;
    font-weight: 600;
  }

  @media screen and (max-width: 1100px) {
    
    .formCheckbox {
      height: 75px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 7.5%;
  margin-bottom: 9.5%;

  @media screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    margin: 7.5% auto;
  }
`;

export const ButtonPrev = styled.button`
  color: ${(props) => props.theme.colors.primaryColor};
  border: none;
  background-color: white;
  padding: 16px;
  width: 12vw;
  font-family: ${(props) => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1100px) {
    width: 85vw;
  }
`;

export const ButtonNext = styled.button`
  color: white;
  border: none;
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: 16px;
  width: 12vw;
  font-family: ${(props) => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: #277567;
  }

  @media screen and (max-width: 1100px) {
    width: 85vw;
    margin-bottom: 1%;
  }
`;
