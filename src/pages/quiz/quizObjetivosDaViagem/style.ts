import styled from 'styled-components'


export const TituloPergunta = styled.h2 `
font-weight: 600;
font-size: 32px;
font-family:   ${props => props.theme.fonts.fontMontserrat};
padding-right: 30px;
`
export const LayoutGrid = styled.div`
max-width: 1920px;
max-height: 1080px;
width: 90%;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;

*{padding: 0;
margin: 0;
box-sizing: border-box}
`

export const QuizPageGrid = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: auto;


`


export const ContainerQuiz = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 800px;
    height: auto;
    margin: 110px auto;
    

    .buttonVoltar{position: absolute;
    right: 850px;
  bottom: 62px;
color: ${props => props.theme.colors.primaryColor};
border: none;
background-color: white;
width: 25px;
height: 25px;
font-family: ${props => props.theme.fonts.fontMontserrat};
font-size: 18px;
font-weight: 500;
}

.buttonProsseguir {position: absolute;
    right: 530px;
  bottom: 50px;
color: white;
border: none;
background-color: ${props => props.theme.colors.primaryColor};
width: 222px;
height: 56px;
font-family: ${props => props.theme.fonts.fontMontserrat};
font-size: 18px;
font-weight: 500;
border-radius: 8px}


`




export const Form = styled.form`

#labelCultura {font-family: ${props => props.theme.fonts.fontMontserrat};
font-size: 24px;
font-weight: 600;}

.pForm{font-family: ${props => props.theme.fonts.fontMontserrat};
font-size: 16px;
font-weight: 400;}

`

export const ContainerQuestions = styled.div`
width: 796px;
height: 121px;
border: 1px solid gray;
border-radius: 8px;
display: flex;
align-items: center;
margin-top: 15px;



.container{display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
 
}

  .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 5px;
  width: 5px;}

  .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 25px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.primaryColor};
  
  padding: 15px;
  margin-left: 25px;
  
}




.container:hover .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  
  
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  
}

.container input:checked ~ .checkmark:after {
  display: block;
  
}

.container .checkmark:after {
  left: 5px;
  top: 5px;
  width: 0px;
  height: 0px;
  border: solid  ${props => props.theme.colors.primaryColor};
  border-width: 10px 10px 10px 10px;
  border-radius: 18px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  
}

.inputStyle {margin-left: 30px;
   padding: 10px;
   }
`

export const ContainerAlignItems = styled.div`
display:flex;
flex-direction: column;
gap: 10px;
margin-left: 45px;


`

export const VoltarHome = styled.div`
width: 401px;
display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;
height: 1080px;
background-color: ${props => props.theme.colors.primaryColor};


.labelStyle{color: white;
  ${props => props.theme.fonts.fontMontserrat};
margin-left: 45px;}


.arrowIcon {position: absolute;
    top: 82px;
    left: 330px;
z-index: 2;
color: white;}

.pBackLogin {position: absolute;
    top: 80px;
    left: 360px;
z-index: 3;
color: white;}


.container{display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
 margin-top: 100px;
 width: 170px;
}



  .container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 5px;
  width: 5px;}

  .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 25px;
  border: 1px solid;
  border-color: white;
  background-color: ${props => props.theme.colors.primaryColor};
  padding: 15px;
  margin-left: 25px;
  
}



.container:hover .checkmark {
  background-color: gray;
}

.container input:checked ~ .checkmark {
  background-color: white;
  
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  
}

.container input:checked ~ .checkmark:after {
  display: block;
  
}

.container .checkmark:after {
  left: 0px;
  top: 0px;
  width: 0px;
  height: 0px;
  border: solid white;
  border-width: 0px 0px 0px 0px;
  border-radius: 18px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  
}

`