import React from "react";
import styled from "styled-components";
import "../../App.css"
import Logo from "../../assets/img/lucamo-logo.svg"
import { ColorPrincipal, ColorSecundario } from "../UI/variables";

const StyledFooter = styled.footer`
    background-color: ${ColorPrincipal};
    div{
        font-size: 20px;
        padding: 40px 0 10px 0;
        color: white;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        .logo{
            font-size: 32px;
            font-weight: bolder;
        }
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
                    <span className="logo">LUCAMO</span>
                    <span>2022 - 2023</span>
                </div>
            </StyledFooter>
};

export default Footer;