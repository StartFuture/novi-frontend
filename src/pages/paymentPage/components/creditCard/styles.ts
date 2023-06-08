import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid ${props => props.theme.colors.lightGreyColor};
`;

export const CardInfos = styled.div`
  padding-top: 4.1%;
  padding-left: 7.5%;
  padding-bottom: 4.8%;
  width: 63%;

  .form { 
    display: flex;
    flex-direction: column;
  }

  .form input {
    height: 50px;
    width: 100%;
    padding-left: 16px;
    margin-top: 1.4%;
    margin-bottom: 3.6%;
    border-color: ${props => props.theme.colors.lightGreyColor};
    border-radius: 4px;
  }

  .formWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 33px;
  }
`;
