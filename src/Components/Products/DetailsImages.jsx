import React from "react";
import styled from "styled-components";
import farola from "../../assets/img/comments.svg"

const ContainerImages = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;

    span{
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0.2rem;
        border-radius: .6rem;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    }

    img{
        width: 60%;
    }
`;

const ContainerPrincipal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 4;

    span{
        width: 80%;
        height: 70%;
    }
`;

const ContainerImagesToSelect = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex: 2;

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        
        height: 40%;
        padding: 0;
        margin: 0;
        gap: 2rem;
    }

    li{
        height: -webkit-fill-available;
        display: inline-block;
        list-style: none;
        width: 50%;
    }

    span{
        position: relative;
        height: 100%;
    }

    input{
        position: absolute;
        border-color: black;
        overflow: visible;
        cursor: pointer;

        opacity: .01;
        outline: 0;
        z-index: 20;

        width: -webkit-fill-available;
        height: -webkit-fill-available;
    }

    img{
        height: 100%;
    }
`;

const DetallesImages = () =>{

    return  <ContainerImages>
                <ContainerPrincipal>
                    <span>
                        <img src={farola} alt="Imagen Product"></img>
                    </span>
                </ContainerPrincipal>
                <ContainerImagesToSelect>
                    <ul>
                        <li>
                            <span>
                                <input></input>
                                <img src={farola} alt="Opciones"></img>
                            </span>
                        </li>
                        <li>
                            <span>
                                <input></input>
                                <img src={farola} alt="Opciones"></img>
                            </span>
                        </li>
                        <li>
                            <span>
                                <input></input>
                                <img src={farola} alt="Opciones"></img>
                            </span>
                        </li>
                        <li>
                            <span>
                                <input></input>
                                <img src={farola} alt="Opciones"></img>
                            </span>
                        </li>
                    </ul>
                </ContainerImagesToSelect>
            </ContainerImages>
    
}

export default DetallesImages;