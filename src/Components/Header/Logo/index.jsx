import React from "react";
import "./Logo.css"
import LucamoLogo from "../../../assets/img/logo.svg"
import menu from "../../../assets/img/menu.svg"

const Logo = () =>{

    return ( 
    
            <div className="navbar__logo">
                <div className="navbar__menu">
                    <a href="# " className="navbar__menu-link">
                        <img src={menu} alt="Menu de productos" className="navbar__menu-image"></img>
                    </a>
                </div>
                <a href="# " className="navbar__logo-link">
                    <img src={LucamoLogo} alt="Company Logo" className="navbar__logo-img" />
                </a>
            </div>

    )
};

export {Logo};