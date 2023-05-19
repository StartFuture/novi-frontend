import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  height: 22px;
  text-align: center;
  border: none;
  background: none;
  margin: 118px auto auto 195px;
  color: #ffff;
  cursor: pointer;

  p { 
    font-size: 18px;
    margin-top: 5px;
  }

  @media screen and (max-width: 1112px){
    display: none;
  }
`;


