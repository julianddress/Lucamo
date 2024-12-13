import React from "react";
import '../../App.css'
import Container1 from "./ContainerOne";
import Container2 from "./ContainerTwo";
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