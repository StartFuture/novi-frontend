import React from "react";

import { Link } from "react-router-dom";

import { Container, SelectedContainer, MyProfile, UserMenuLeft } from "./style"

import { MdDashboard } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";


function UserMenu(){
    return(
        <UserMenuLeft>
            <div className="LogoNovi">
                <h1> Noví </h1>
            </div>
            <small className="Menu">Menu</small>
            <SelectedContainer>
                <MdDashboard className="icon" style={{fontSize: "40px", marginRight: "20px", marginLeft: "55px", color: "#FFF"}}/>
                <Link to='/home' className="link">
                    <p>Home</p>
                </Link>
            </SelectedContainer>
            <Container>
                <AiFillHeart style={{fontSize: "40px", marginRight: "20px", marginLeft: "55px", color: "#3BB29D"}}/>
                <Link to='/home' className="link">
                    <p>Minhas viagens</p>
                </Link>
            </Container>
            <div className="lastContainer"/>
            <div className="horizontalLine"/>
            <MyProfile>
                <BsFillCircleFill style={{fontSize: "50px", marginRight: "20px", marginLeft: "55px", color: "#3BB29D"}}/>
                <div className="verticalAlign">
                    <input type="text" value="Marcelo Henrique"></input>
                    <Link to='/profile' className="link">
                        <p>Ver perfil</p>
                    </Link>
                </div>
                
            </MyProfile>            
        </UserMenuLeft>
    )
}

export default UserMenu;