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
        font-weight: bold;
    }


    small {
        margin-top: 3px;
        color: #000
    }

    .formCheckbox input:checked + label {
        color: ${props => props.theme.colors.primaryColor};
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