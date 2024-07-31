import React from "react";
import styled from "styled-components";
import bannerCarro from "../../assets/img/car.png"
import "../../Components/Banner/Banner.css";
import "../../assets/css/base.css"
import bombilla from "../../assets/img/bombilla.svg"

const StyledGradient = styled.div`
    height: 100px;
    background-image: -webkit-linear-gradient(271.5deg, var(--background-color-principal) 45%, #F0F5F5 50%);
`;

const Banner = () => {
    return  (
                <section>
                    <div className="banner">
                        <img src={bannerCarro} alt="Carro Mustang" />
                    </div>
                    <StyledGradient>
                        {/* SOLO CREAMOS EL EFECTO EN DIAGONAL DEL SECTION */}
                    </StyledGradient>
                </section>
    )
} 

export default Banner;