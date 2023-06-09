import styled from "styled-components";

export const Content = styled.div`
  display: flex;

  .formCheckbox {
    display: flex;
    margin: 3% 0;
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

  @media screen and (max-width: 1100px) {
    .formCheckbox {
      margin: 5% 0;
    }

    .formCheckbox label {
      font-size: 16px;
    }
  }
`;
