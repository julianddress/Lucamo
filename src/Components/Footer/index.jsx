import React from "react";
import "../../App.css"
import './Footer.css'
import Logo from "../../assets/img/lucamo-logo.svg"

const Footer = () => {

    return  (
                <footer>
                    <div className="effect">
                        {/* SOLO CREAMOS EL EFECTO EN DIAGONAL DEL SECTION */}
                    </div>
                    <div className="alinear-items data">
                        <img src={Logo} alt="Logo Lucamo"></img>
                        <span className="brand">LUCAMO</span>
                        <span>2022 - 2023</span>
                    </div>
                </footer>
    )
};

export default Footer;