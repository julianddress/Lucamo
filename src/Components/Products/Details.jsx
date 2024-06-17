import React from "react";
import styled from "styled-components";
import "../../App.css"
import DetallesData from "./DetailsData";
import DetallesImages from "./DetailsImages";
import closeTab from "../../assets/img/closeTab.svg"

// ESTILOS CONTAINER
const containerStyles = `
    display: flex;
    justify-content: center;
    position: absolute;
    width: 70%;
    height: 70%;
    margin: auto;
    background-color: #FFFFFF;
    border-radius: 3rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const Closed = styled.div`
    position: relative;
    width: auto;
    left: 94.5%;
    top: 2%;

    img{
        position: absolute;
        cursor: pointer;
        width: 3.5rem;
    }
`;

const ContainerInfo = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    ${containerStyles}
`;


const Detalles = () => {

    return  <ContainerInfo>
                <Closed>
                    <img src={closeTab} alt="closeTab Tbb"/>
                </Closed>
                <DetallesImages></DetallesImages>
                <DetallesData></DetallesData>
            </ContainerInfo>
}

export default Detalles;