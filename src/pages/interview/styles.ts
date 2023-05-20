import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export const LeftContainer = styled.div`
    width: 35vw;
    background-color: ${props => props.theme.colors.primaryColor};
    height: 100vh;
`;

export const MainContainer = styled.div`
    width: 70vw;
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
        width: 400px;
        height: 400px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
        display: flex;
        flex-direction: column;
      }
      
      .form-container .header {
        flex: 20%;
        display: grid;
        place-items: center;
      }
      
      .form-container .body {
        flex: 60%;
      }
      
      .form-container .footer {
        flex: 20%;
        display: flex;
        justify-content: center;
      }
      
      .form-container .footer button {
        border-radius: 7px;
        width: 100px;
        height: 40px;
        background-color: rgb(255, 0, 140);
        font-weight: bold;
        color: white;
        border: 0 none;
        border-radius: 1px;
        cursor: pointer;
        padding: 10px 5px;
        margin: 10px 5px;
        margin: 5px;
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
      
      /* PROGRESS BAR */
      .progressbar {
        width: 400px;
        height: 10px;
        background-color: white;
        margin-bottom: 50px;
      }
      
      .progressbar div {
        width: 33.3%;
        height: 100%;
        background-color: rgb(98, 0, 255);
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
  top: 50%;
  transform: translateY(-50%);
  background-color: ${props => props.theme.colors.primaryColor};

  ul {
    padding-left: 170px;
    position: relative;
    list-style: none;
  }

  ul::after {
    content: "";
    position: absolute;
    width: 1px;
    height: calc(100% - 85px);
    left: 160px;
    top: 10px;
    background: #FFF;
    z-index: -1;
    margin-top: 29px;
  }

  ul li {
    padding: 35px 0;
    padding-left: 20px;
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