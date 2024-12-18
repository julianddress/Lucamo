import React from "react";
import '../../App.css'
import Container1 from "./NavLeft";
import Container2 from "./NavRight";
import "../Header/Header.module.css"

const Header = () => {

    return  (
                <nav>
                    <Container1 />
                    <Container2 />
                </nav>
    ) 
}

export {Header};