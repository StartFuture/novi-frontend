import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    
  .modal-overlay {
    position: absolute;
    top: 111px;
    right: 237px;
    width: 300px;
    background: darkgrey;
  }
  
  .modal-content {
    position: absolute;
        top: 111px;
        right: 237px;
        width: 300px;
        background: darkgrey;
  }
  
  button {
    padding: 5px;
    font-size: large;
    float: right;
    cursor: pointer;
  }`