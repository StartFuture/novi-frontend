import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 795px;
  margin-left: 7vw;


  .formCheckbox {
    display: flex;
    margin: 16px 0;
    align-items: center;
  }

  .formCheckbox input {
    display: none;
  }

  .formCheckbox label {
    font-weight: 400;
    font-size: 20px;
    cursor: pointer;
  }

  .formCheckbox input + label::before {
    content: "";
    display: inline-block;
    height: 24px;
    width: 24px;
    border: 1px solid #000;
    border-radius: 8px;
    margin-right: 24px;
    vertical-align: middle;
  }

  .formCheckbox input:checked + label::before {
    background-image: url("svg/check.svg");
    background-position: center;
    background-repeat: no-repeat;
    border-color: ${(props) => props.theme.colors.primaryColor};
  }

  .formCheckbox input:checked + label {
    color: ${(props) => props.theme.colors.primaryColor};
  }

  .checkboxWrapper {
    width: 750px;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGreyColor};
  }
`;
