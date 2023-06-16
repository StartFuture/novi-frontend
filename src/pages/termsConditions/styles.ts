import styled from "styled-components";


export const MainContainer = styled.div`
    min-height: 100vh;
    display: flex;

    @media screen and (max-width: 1112px) {
        margin: 0 auto;
    }
`;
export const MainImage = styled.div`
position: fixed;
left: 0;
top: 0;
    background: url("img/termsBg.png") no-repeat left;
    background-size: fill;
    min-height: 100vh;
    width: 100%;
    display: flex;

    @media screen and (max-width: 1112px) {
        background-image: none;
        margin: 0 auto;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 660px;
    margin: 100px auto;

    @media screen and (max-width: 1112px){
        margin: 0 auto;
        width: 100%;
        ::before { 
            content:"";
            background-color: ${props => props.theme.colors.primaryColor};
            max-width: 100vh;
            min-width: 100%;
            height: 33px;
            display: block;
        }
    }
`;