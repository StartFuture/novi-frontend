import React from "react";

import { Link } from "react-router-dom";

import { Container, SelectedContainer, MyProfile, UserMenuLeft } from "./style"

import { MdDashboard } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";

import { useState, useEffect } from "react";
import { getUserInfo } from "services/Api";

function UserMenuDesktop(props){

    var haveTrip = parseInt(props.haveTrip);
    var isHome = parseInt(props.isHome);

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        getUserInfo()
        .then((res) => {setUserInfo(res.data.user)})
        .catch((err) => {
            console.log(err)
        });
    }, []);
    
    return(
        <UserMenuLeft >
            <div className="LogoNovi">
                <h1> Noví </h1>
            </div>
            <small className="Menu">Menu</small>
            {
                isHome > 0 ?
                <>
                    <Container>
                        <MdDashboard className="icon" style={{fontSize: "40px", marginRight: "20px", marginLeft: "55px", color: "#FFF"}}/>
                        <Link to='/home' className="link">
                            <p>Home</p>
                        </Link>
                    </Container>
                    <SelectedContainer>
                        <AiFillHeart style={{fontSize: "40px", marginRight: "20px", marginLeft: "55px", color: "#3BB29D"}}/>
                        {
                            haveTrip > 0 ? 
                            <Link to='/home-booked-travel' className="link">
                                <p>Minhas viagens</p>
                            </Link>
                            :
                            <Link to='/home-without-travel' className="link">
                                <p>Minhas viagens</p>
                            </Link>
                        }
                    </SelectedContainer>
                </>
            :
            <>
                <SelectedContainer>
                    <MdDashboard className="icon" style={{fontSize: "40px", marginRight: "20px", marginLeft: "55px", color: "#FFF"}}/>
                    <Link to='/home' className="link">
                        <p>Home</p>
                    </Link>
                </SelectedContainer>
                <Container>
                    <AiFillHeart style={{fontSize: "40px", marginRight: "20px", marginLeft: "55px", color: "#3BB29D"}}/>
                    {
                        haveTrip > 0 ? 
                        <Link to='/home-booked-travel' className="link">
                            <p>Minhas viagens</p>
                        </Link>
                        :
                        <Link to='/home-without-travel' className="link">
                            <p>Minhas viagens</p>
                        </Link>
                    }
                </Container>
                </>
            }
            
            <div className="lastContainer"/>
            <div className="horizontalLine"/>
            <MyProfile>
                <div className="profilePhotoMobile"></div>
                <BsFillCircleFill style={{fontSize: "50px", marginRight: "20px", marginLeft: "55px", color: "#3BB29D"}}/>
                <div className="verticalAlign">
                    <input type="text" value={userInfo.name_user}></input>
                    <Link to='/profile' className="link">
                        <p>Ver perfil</p>
                    </Link>
                </div>
                
            </MyProfile>            
        </UserMenuLeft>
    )
}

export default UserMenuDesktop;