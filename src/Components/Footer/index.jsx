import React from "react";
import styled from "styled-components";
import "../../App.css"
import Logo from "../../assets/img/lucamo-logo.svg"
import { ColorPrincipal, ColorSecundario } from "../UI/variables";

const StyledFooter = styled.footer`
    background-color: ${ColorPrincipal};
    div{
        padding: 40px 0 10px 0;
        color: white;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
`;

const StyledGradient = styled.div`
    width: 100%;
    height: 100px;
    background-image: -webkit-linear-gradient(271.5deg, ${ColorSecundario}  49%, ${ColorPrincipal} 51%);
`;

const Footer = () => {

    return  <StyledFooter>
                <StyledGradient>
                    {/* SOLO CREAMOS EL EFECTO EN DIAGONAL DEL SECTION */}
                </StyledGradient>
                <div className="alinear-items">
                    <img src={Logo} alt="Logo Lucamo"></img>
                    <span>LUCAMO</span>
                    <span className="date">2022 - 2023</span>
                </div>
            </StyledFooter>
};

export default Footer;