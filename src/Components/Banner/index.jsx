import React from "react";
import styled from "styled-components";
import '../../App.css'
import { ColorPrincipal } from "../UI/variables";
import bannerCarro from "../../assets/img/car.png"

const StyledSection = styled.section`
    flex-direction: column;
    justify-content: center;
    height: max-content;
    background-color: ${ColorPrincipal};
    .banner{
        min-width: 60%;
        min-height: 60%;
        margin: 50px 0 100px 0;
        border-radius: 20px;
        border: 1px solid white;
        padding: 15px;
        img{
            width: 100%;
        }
    }
`;

const StyledGradient = styled.div`
    width: 100%;
    height: 100px;
    background-image: -webkit-linear-gradient(271.5deg, ${ColorPrincipal} 45%, #F0F5F5 50%);
`;


const Banner = () => {
    return  <StyledSection className="alinear-items">
                <div className="alinear-items banner">
                    <img src={bannerCarro} alt="Carro Mustang" />
                </div>
                <StyledGradient>
                    {/* SOLO CREAMOS EL EFECTO EN DIAGONAL DEL SECTION */}
                </StyledGradient>
            </StyledSection>
} 

export default Banner;