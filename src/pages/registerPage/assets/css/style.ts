import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  margin-left: 500px;

  

  .form {
    width: 100%;
    margin: 6.2% 36.6% 8.3% 19.4%;
  }

  .formBox {
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
  }

  .personalInfo::after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    margin-top: 4.8%;
    margin-bottom: 4.8%;
   
  }

  .personalInfoCouple {
    display: grid;
    grid-template-columns: 44% auto;
    gap: 8px;
    align-items: center;
  }

  .addressInfoCouple1 {
    display: grid;
    grid-template-columns: 44% auto;
    gap: 8px;
    align-items: center;
  }

  .addressInfoCouple2 {
    display: grid;
    grid-template-columns: 57.3% auto;
    gap: 8px;
    align-items: center;
  }

  .addressInfo::after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    margin-top: 4.8%;
    margin-bottom: 4.8%;
   
  }

  .btnContainer {
    margin-top: 4.8%;
  }

  @media screen and (max-width: 1340px) {
    .form {
      width: 100%;
      margin-right: 28%;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    margin-left: 0px;

    .form {
      margin: auto 6.4%;
    }

    .btnContainer {
      margin-bottom: 2.2%;
    }

    .personalInfoCouple {
      display: block;
    }

    .addressInfoCouple1 {
      display: block;
    }

    .addressInfoCouple2 {
      display: block;
    }
  }
`;


export const Container = styled.div`
 max-width: 100vw;
  max-height: 100vh;
  
  .header {height: 60px;
background-color: ${props => props.theme.colors.primaryColor};
width: 100%;
margin-bottom: 40px;
display: none;}

  .container {
    display: grid;
    grid-template-columns: 20% auto;
  }

  label {
    margin-bottom: 0.8%;
    font-size: 16px;
    font-weight: 400;
  }

  input {
    height: 56px;
    background-color: #f6f6f6;
    border: 1px solid ${(props) => props.theme.colors.lightGreyColor};
    color: black;
    font-weight: 400;
    border-radius: 4px;
    padding: 18px 16px;
  }

  .mobileContent {
    display: none;
  }

  @media screen and (max-width: 1100px) {

    .header {display: block;}

    .container {
      grid-template-columns: none;
      /* grid-template-rows: 50px auto; */
    }

    .menuContent {
      display: none;
    }

    .mobileContent {
      display: block;
    }
  }
`;


