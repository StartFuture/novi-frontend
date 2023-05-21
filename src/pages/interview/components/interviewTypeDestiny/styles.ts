import styled from "styled-components";

export const FormStyled = styled.form`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .titleDestinyType {
        font-size: 24px;
        margin: -1vh 0 2vh 8vw;
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
    }

    .custom-radio-btn .checkmark {
        width: 100%;
        height: 100%;
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
        margin: 1vh 14vw 0 8vw ;
        border-radius: 10px;
    }

    .descriptionDestinyType {
        display: flex;
        flex-direction: column;
        margin-left: 30px;
        margin-top: 10px;
    }
`;