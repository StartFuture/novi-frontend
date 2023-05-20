import styled from "styled-components";

const DivAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.lightGreyColor};
  border-radius: 8px;
  margin: 40px 0px;
  padding: 15px;

  .divSpace {
    padding-left: 20px;
  }

  .divStyle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 38px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.primaryColor};
    margin-right: 20px;
  }

  .p-Viajante {
    font-family: ${(props) => props.theme.fonts.fontMontserrat};
    font-weight: 500;
    color: white;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;

    .divSpace {
      padding: 0;
      text-align: center;
    }

    .divStyle { 
      margin: 0;
    }
  }
`;

export default DivAlign;
