import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-content: end;
  height: 22px;
  text-align: center;
  border: none;
  background: none;
  padding-top: 23%;
  margin-left: 35%;
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

  @media only screen and (max-device-width: 1570px) {
    padding-top: 13%;
    margin-left: 30%;
  }

  @media only screen and (max-device-width: 1106px) {
    display: none;
  }
`;


