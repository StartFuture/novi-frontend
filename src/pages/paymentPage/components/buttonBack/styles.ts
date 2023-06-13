import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-content: end;
  height: 22px;
  width: 100%;
  text-align: center;
  border: none;
  background: none;
  margin-top: 28%;
  margin-left: 36.5%;
  color: #ffff;
  cursor: pointer;
  font-weight: 400;

  :hover {
    text-decoration: underline;
  }

  p {
    font-size: 18px;
    margin-top: 5px;
  }

  @media screen and (max-width: 1500px) {
    margin-left: 20.5%;
  }
`;
