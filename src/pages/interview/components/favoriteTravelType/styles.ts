import styled from "styled-components";

export const FormStyled = styled.form`
  .formCheckbox {
    display: flex;
    flex-direction: row;
    border: 1px solid ${(props) => props.theme.colors.lightGreyColor};
    border-radius: 16px;
    margin-bottom: 2%;
    cursor: pointer;
    align-items: center;
    padding: 16px;
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

  @media screen and (max-width: 1100px) {
    .formCheckbox {
      margin-bottom: 5.5%;
    }

    .checkboxContent h3 {
      font-size: 16px;
    }
  }
`;
