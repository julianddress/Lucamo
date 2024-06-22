import React from "react";
import '../../App.css'
import Container1 from "./ContainerOne";
import Container2 from "./ContainerTwo";
import "../Header/Header.css"

const Header = () => {

    return  (
                <nav className="alinear-items">
                    <Container1 />
                    <Container2 />
                </nav>
    ) 
}

export default Header;