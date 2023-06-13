import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primaryColor};
  align-items: center;

  div {
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    color: white;
    font-size: 130px;
    margin-bottom: 11.5%;
  }

  p {
    color: white;
    font-size: 42px;
    font-weight: 600;
  }

  @media screen and (max-width: 915px) {
    div {
      text-align: center;
    }

    h1 {
      font-size: 45px;
      margin-bottom: 9%;
    }

    p {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
