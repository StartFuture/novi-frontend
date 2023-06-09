import styled from "styled-components"


export const BoxMenu = styled.div`
width: auto;
height: 50px;
display: none;



.menuStyle {color: white;
width: 25px;
height: 25px;
margin-left: 25px;
cursor: pointer;
}


img {
    width: 67px;
    height: 22px;
    margin-right: 25px;
}


@media (max-width: 900px) {display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.primaryColor};
    

    .menu.active {opacity: 1;
    visibility: visible;}

    .menu {opacity: 0;}
}
`