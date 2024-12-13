import React from "react";
import "../../App.css"
import Styles from'./Footer.module.css'
import Logo from "../../assets/img/lucamo-logo.svg"

const Footer = () => {

    return  (
                <footer>
                    <div className={Styles.effect}>
                        {/* SOLO CREAMOS EL EFECTO EN DIAGONAL DEL SECTION */}
                    </div>
                    <div className={Styles.data}>
                        <img src={Logo} alt="Logo Lucamo"></img>
                        <span className={Styles.brand}>LUCAMO</span>
                        <span>Fundado en 2022</span>
                    </div>
                </footer>
    )
};

export {Footer};