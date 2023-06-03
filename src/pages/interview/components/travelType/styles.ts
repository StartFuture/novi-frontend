import styled from "styled-components";

export const FormStyled = styled.form`
  .titleDestinyType {
    font-size: 24px;
    margin: -1vh 0 2vh 8vw;
    font-weight: 600;
  }

  .formCheckbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.lightGreyColor};
    padding: 15px;
    height: 115px;
    width: 80%;
    margin: 1vh 14vw 0 8vw;
    border-radius: 10px;
    cursor: pointer;
  }

  .custom-radio-btn {
    width: 20px;
    height: 20px;
    border: 2px solid ${(props) => props.theme.colors.primaryColor};
    border-radius: 50%;
    margin-left: 20px;
  }

  .custom-radio-btn .checkmark {
    width: 10px;
    height: 10px;
    margin: 23% auto;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primaryColor};
    display: block;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .custom-radio-btn input {
    display: none;
  }

  .custom-radio-btn input:checked + .checkmark {
    opacity: 1;
  }

  .checkboxTitle {
    font-size: 18px;
    font-weight: 600;
  }

  small {
    margin-top: 5px;
    color: #000;
    font-weight: 400;
  }

  .descriptionDestinyType {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 10px;
  }

  @media screen and (max-width: 1090px) {
    .formCheckbox {
      width: 85%;
    }    

    .checkboxTitle {
      font-size: 16px;
    }

    .descriptionDestinyType {
      font-size: 14px;
    }
  }
`;
