import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  background-color: ${(props) => props.theme.colors.lightGreyColor};
`;

export const LeftContent = styled.div`
  background: url("img/interviewStartBG.png") no-repeat left;
  background-size: fill;
  height: 100vh;
  width: 22.2%;
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
`;

export const PaymentMethods = styled.div`
  margin-top: 3.5%;

  .methods { 
    margin-bottom: 1.4%;
    border-radius: 16px;
    background-color: white;
    border: 1px solid ${props => props.theme.colors.lightGreyColor};
  }

  .formCheckbox {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.lightGreyColor};
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

  .checkboxContent {
    margin-left: 32px;
  }

  .checkboxContent h3 {
    font-size: 18px;
    font-weight: 600;
  }
`;
