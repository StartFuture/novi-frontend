import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 100%;

    p {
        margin-top: 8px;
        margin-bottom: 16px;
    }

    .formCheckbox {
        display: flex;
        margin: 16px 0;
        align-items: center;
    }

    .formCheckbox input {
        display: none;
    }

    .formCheckbox input + label::before { 
        content: "";
        display: inline-block;
        height: 24px;
        width: 24px;
        border: 1px solid ${props => props.theme.colors.lightGreyColor};
        border-radius: 8px;
        margin-right: 24px;
        vertical-align: middle;
        cursor: pointer;
    }

    .formCheckbox input:checked + label::before {
        background-image: url("svg/check.svg");
        background-position: center;
        background-repeat: no-repeat;
        border-color: ${props => props.theme.colors.primaryColor};
    }

    .formCheckbox input:checked + label {
        color: ${props => props.theme.colors.primaryColor};
    }
    
    #submit { 
        width: 100%;
        height: 56px;
        padding: 12px 24px;
        margin-top: 16px;
        background-color: ${props => props.theme.colors.primaryColor};
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 18px;
        cursor: pointer;
    }
`;