import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  max-height: 100vh;

  @media screen and (max-width: 1100px) {
    display: block;
  }
`;

export const LeftContainer = styled.div`
  min-width: 25%;
  background-color: ${(props) => props.theme.colors.primaryColor};
  min-height: 100%;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const NavStyled = styled.nav`
  margin-top: 16%;
  margin-left: 40%;
  max-height: 100vh;

  ul {
    list-style: none;
  }

  ul li {
    margin-bottom: 6vh;
  }

  ul li a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }

  ul li a:before {
    content: "";
    display: block;
    background: ${(props) => props.theme.colors.primaryColor};
    min-width: 18px;
    min-height: 18px;
    margin-right: 16px;
    border-radius: 50px;
    border: 1px solid #fff;
    transition: background 250ms;
  }

  ul li a.act {
    font-weight: 700;
  }

  ul li a.act::before {
    background: #fff;
  }
`;

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;

  @media screen and (max-width: 1100px) {
    width: 100vw;
    height: 100vh;

    ::before {
      content: "";
      background-color: ${(props) => props.theme.colors.primaryColor};
      width: 100vw;
      height: 33px;
      display: block;
    }
  }
`;

export const FormStyled = styled.div`
  width: 52%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  margin-left: 18%;
  margin-top: 5.5%;

  .header {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5.5%;
  }

  @media screen and (max-width: 1100px) {
    margin: 0 auto;
    margin-top: 4.5%;
    width: 80%;

    .header {
      font-size: 17px;
      font-weight: 600;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
  margin-top: 4.5%;

  @media screen and (max-width: 1100px) {
    margin: 0 auto;
    margin-top: 4%;
    width: 80%;
    flex-direction: column-reverse;
  }
`;

export const ButtonPrev = styled.button`
  color: ${(props) => props.theme.colors.primaryColor};
  border: none;
  background-color: white;
  padding: 16px;
  width: 12vw;
  font-family: ${(props) => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    font-size: 14px;
    padding: 12px 24px 12px 24px;
  }
`;

export const ButtonNext = styled.button`
  color: white;
  border: none;
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: 16px;
  width: 12vw;
  font-family: ${(props) => props.theme.fonts.fontMontserrat};
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: #277567;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    font-size: 14px;
    padding: 12px 24px 12px 24px;
  }
`;
