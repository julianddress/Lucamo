import React from "react";
import styled from "styled-components";
import {Banner} from "../Components";

const StyledGradient = styled.div`
    height: 100px;
    background-image: -webkit-linear-gradient(271.5deg, var(--background-color-principal) 45%, #F0F5F5 50%);
`;

const BannerSection = () => {
    return  <>
                <section>
                    <Banner/>
                    <StyledGradient/> {/* EFECTO EN DIAGONAL AL FINAL DEL SECTION */}
                </section>
            </>
} 

export {BannerSection};