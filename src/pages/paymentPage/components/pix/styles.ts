import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 10%;
  width: 100%;
  height: 100%;
  padding-top: 3.3%;
  padding-left: 8%;
  padding-right: 26.2%;
  padding-bottom: 2.7%;
  border-top: 1px solid ${(props) => props.theme.colors.lightGreyColor};
  
  @media screen and (max-width: 1340px) {
    padding-right: 16.2%;
  }
`;

export const QrCode = styled.div`
  background-image: url("img/NoviQrCode.png");
  background-size: cover;
  height: 276px;
  width: 276px;
  border: 1px solid ${(props) => props.theme.colors.lightGreyColor};
  border-radius: 8px;
  padding: 16px;

  @media screen and (max-width: 1340px) {
    height: 220px;
    width: 220px;
  }

  @media screen and (max-width: 1100px) {
    height: 120px;
    width: 120px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 3.4%;
  }

  .copyPaste {
    display: flex;
    height: 56px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${(props) => props.theme.colors.lightGreyColor};
    border-radius: 4px;
    margin-bottom: 7%;
  }

  .copyPaste div {
    margin: auto 16px;
  }

  .copyPaste input {
    border: none;
    font-size: 16px;
  }
`;
