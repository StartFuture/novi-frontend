import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export const LeftContainer = styled.div`
    width: 22vw;
    background-color: ${props => props.theme.colors.primaryColor};
    height: 100vh;
`;

export const MainContainer = styled.div`
    width: 78vw;
    height: 100vh;
`;

export const FormStyled = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .form-container {
        // display: flex;
        // flex-direction: column;
        // background-color: blue;
        width: 80%;
        height: 80%;
      }
      
      .form-container .header {
        display: flex;
        justify-content: flex-init;
        margin: 9vh 0 5vh 15vw;
      }
      
      .form-container .body {
        
      }

      .sign-up-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .sign-up-container input {
        margin: 5px;
        width: 200px;
        height: 40px;
        padding-left: 5px;
        font-size: 20px;
      }
      
      .personal-info-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .personal-info-container input {
        margin: 5px;
        width: 200px;
        height: 40px;
        padding-left: 5px;
        font-size: 20px;
      }
      
      .other-info-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .other-info-container input {
        margin: 5px;
        width: 200px;
        height: 40px;
        padding-left: 5px;
        font-size: 20px;
      }
      
      input {
        border: 2px solid rgb(98, 0, 255);
        border-radius: 5px;
      }
      
      input:focus {
        border: 3px solid rgb(98, 0, 255);
      }
`

export const NavStyled = styled.nav`
  position: absolute;
  top: 50vh;
  transform: translateY(-50%);
  background-color: ${props => props.theme.colors.primaryColor};

  ul {
    padding-left: 8vw;
    position: relative;
    list-style: none;
  }

  ul::after {
    content: "";
    position: absolute;
    width: 1px;
    height: calc(100% - 85px);
    left: 7vw;
    top: 10px;
    background: #FFF;
    z-index: -1;
    margin-top: 29px;
  }

  ul li {
    padding: 35px 0;
    padding-left: 10px;
  }

  ul li a {
    text-decoration: none;
    position: relative;
    color #FFF;
    font-size: 18px;
    line-height: 1rem;
    font-weight: 600;
  }

  ul li a:before {
    content: "";
    position: absolute;
    background: ${props => props.theme.colors.primaryColor};
    width: 18px;
    height: 18px;
    left: -39px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50px;
    border: 1px solid #FFF;
    transition: background 250ms;
  }

  ul li a.active {
    font-weight: 700;
  }

  ul li a.active::before {
    background: #FFF;
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 4vh;
  margin-right: 14vw;
  justify-content: flex-end;
`;

export const ButtonPrev = styled.button`
  color: ${props => props.theme.colors.primaryColor};
  border: none;
  background-color: white;
  width: 10vw;
  height: 7vh;
  font-family: ${props => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
`;

export const ButtonNext = styled.button`
  color: white;
  border: none;
  background-color: ${props => props.theme.colors.primaryColor};
  width: 12vw;
  height: 5vh;
  font-family: ${props => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;

`;