import React from "react"
import { HiMenu } from "react-icons/hi"
import Novi from "../../assets/images/Noví.svg"
import { BoxMenu } from "./style"


function MenuMobile() {

    return (

        <BoxMenu>
            <HiMenu className="menuStyle"></HiMenu>

            <img src={Novi} alt="logo-novi" />
        </BoxMenu>



    )




}

export default MenuMobile