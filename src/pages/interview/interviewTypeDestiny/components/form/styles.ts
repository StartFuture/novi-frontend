import styled from "styled-components";

export const FormStyled = styled.form`

    display: flex;
    flex-direction: column;
    max-width: 100%;

    .titleDestinyType {
        font-size: 24px;
        margin: 60px 150px 20px 150px;
        font-weight: 600;
    }

    .labelDestinyType {
        font-size: 18px;
        font-weight: 600;
    }

    small {
        margin-top: 5px;
        color: #000;
        font-weight: 400;
    }

    .custom-radio-btn {
        width: 21px;
        height: 20px;
        border 2px solid ${props => props.theme.colors.primaryColor};
        border-radius: 50%;
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .custom-radio-btn .checkmark {
        width: calc(100% - 7px);
        height: calc(100% - 7px);
        border-radius: 50%;
        background-color: ${props => props.theme.colors.primaryColor};
        display: inline-block;
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    .custom-radio-btn input {
        display: none;
    }

    .custom-radio-btn input:checked + .checkmark {
        opacity: 1
    }


    .formCheckbox {
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid ${props => props.theme.colors.lightGreyColor};
        padding: 15px;
        margin: 8px 150px;
        border-radius: 10px;
    }

    .descriptionDestinyType {
        display: flex;
        flex-direction: column;
        margin-left: 30px;
        margin-top: 10px;
    }
`;