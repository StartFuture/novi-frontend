import styled from "styled-components";

export const Container = styled.button`
position: fixed;
z-index: 10;
  display: flex;
  height: 22px;
  text-align: center;
  border: none;
  background: none;
  margin: 118px auto auto 195px;
  color: #ffff;
  cursor: pointer;
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }

  p { 
    font-size: 18px;
    margin-top: 5px;
  }

  @media screen and (max-width: 1112px){
    display: none;
  }
`;


