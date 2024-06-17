import React from "react";
import styled from "styled-components";

// ESTILOS BOTON
const buttonStyles = `
    width: max-content;
    height: max-content;
    padding: 0.5rem 0.8rem;
    border-radius: 0.6rem;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;
    color: black;
    background-color: #A1F6AA;
    font-family: "Hammersmith One", sans-serif;
`;

const ContainerData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
`;

const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
`;

const Container2 = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 15%;

    button{
        ${buttonStyles}
        margin-right: 3.5rem;
        cursor: pointer;
    }
`;

const Reference = styled.div`
    display: grid;
    justify-items: center;
    padding: 2rem;
    flex: 3;

    h1, h3{
        margin: 0;
    }

    h3{
        margin-top: 1rem;
        color: red;
    }
`;

const Description = styled.div`
    font-size: 1.2rem;
    flex: 1;

    h3{
        width: 90%;
        margin: 0;
        padding-bottom: .5rem;
        border-bottom-style: inset;
    }
`;

const About = styled.div`
    width: 90%;
    font-size: 1.4rem;
    flex: 10;    
`;

const Features = styled.div`
    display: flex;
    font-size: 1.2rem;
    padding: 1rem 0;
    flex: 7;
    
    ul{
        display: grid;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    li{
        display: inline-flex;
        align-items: center;
    }

    h3{
        min-width: 20%;
        margin: 0;
    }
`;

const DetallesData = () =>{

    return      <ContainerData>
                    <Container1>
                        <Reference>
                            <span>
                                <h1>
                                    Farola Derecha 18V JU
                                </h1>
                            </span>
                            <span>

                                <h3>
                                    Ref. IN4 - 232928
                                </h3>
                            </span>
                        </Reference>
                        <Description>
                            <span>
                                <h3>
                                    Sobre este articulo:
                                </h3>
                            </span>
                        </Description>
                        <About>
                            <ul>
                                <li>Utilizado en mazda, honda, suzuki y mucho muchas otras referencias mas.</li>
                                <li>Util para tractomulas, camiones y demas.</li>
                                <li>Provee iluminacion de 100 watts.</li>
                                <li>Alcance de 10 metro de profundidad.</li>
                            </ul>
                        </About>
                        <Features>
                            <ul>
                                <li>
                                    <h3>
                                        Tamaño:
                                    </h3> 
                                    <span>
                                        100 cm x 50 cm
                                    </span>
                                </li>
                                <li>
                                <h3>
                                        Color:
                                    </h3> 
                                    <span>
                                        Azul
                                    </span>
                                </li>
                            </ul>
                        </Features>
                    </Container1>
                    <Container2>
                        <button>AÑADIR</button>
                    </Container2>
                </ContainerData>

}

export default DetallesData;