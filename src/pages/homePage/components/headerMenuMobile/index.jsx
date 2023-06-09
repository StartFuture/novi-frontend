import React from "react"
import { HiMenu } from "react-icons/hi"
import Novi from "../../assets/images/Noví.svg"
import { BoxMenu } from "./style"
import UserMenu from "pages/homePage/userMenu"
import { useRef, useState } from "react"

function MenuMobile(props) {

    const haveTrip = parseInt(props.haveTrip);
    const isHome = parseInt(props.isHome)

    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive)

    return (

        <BoxMenu>
            <HiMenu onClick={onClick} className="menuStyle"></HiMenu>
            <nav className={`menu ${isActive ? "active" : "inactive"}`} ref={dropDownRef}>
                <UserMenu haveTrip={haveTrip} isHome={isHome}></UserMenu>
            </nav>

            <img src={Novi} alt="logo-novi" />
        </BoxMenu>



    )




}

export default MenuMobile