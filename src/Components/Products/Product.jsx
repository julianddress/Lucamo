import React from "react";
import styled from "styled-components";
import "../../App.css"
import ProductLogo from "../../assets/img/product.png"
import Stars from "../../assets/img/stars.svg"

const Container = styled.div`
    padding: 50px;
    height: max-content;
    border-radius: 50px;
    background-color: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.29);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
    justify-items: center;
`;

const Card = styled.div`
    position: relative;
    border-radius: 20px;
    height: max-content;
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    font-size: 20px;
    img{
        border-radius: 20px;
        max-width: 220px;
    }
    ::before{
        position: absolute;
        content: "";
        left: 0;
        top: 50%;
        width: 100%;
        height: 5px;
        background: rgba(0, 0, 0, 0.10);
    }
    
    h2{
        margin: 0;
    }
    h3{
        margin: 5px;
        font-size: 16px;
        font-weight: 200;
    }
    span{
        font-size: 24px;
    }
`;

const Product = () => {
    return  <Container>
                <Card>
                    <img src={ProductLogo} alt="Imagen Producto"/>
                    <h2>Farola Derecha</h2>
                    <h3>mazda, suzuki, audi</h3>
                    <img src={Stars} alt="Logo Estrellas"/>
                    <span>$ 55.000</span>
                </Card>
                <Card>
                    <img src={ProductLogo} alt="Imagen Producto"/>
                    <h2>Farola Derecha</h2>
                    <h3>mazda, suzuki, audi</h3>
                    <img src={Stars} alt="Logo Estrellas"/>
                    <span>$ 55.000</span>
                </Card>
                <Card>
                    <img src={ProductLogo} alt="Imagen Producto"/>
                    <h2>Farola Derecha</h2>
                    <h3>mazda, suzuki, audi</h3>
                    <img src={Stars} alt="Logo Estrellas"/>
                    <span>$ 55.000</span>
                </Card>
                <Card>
                    <img src={ProductLogo} alt="Imagen Producto"/>
                    <h2>Farola Derecha</h2>
                    <h3>mazda, suzuki, audi</h3>
                    <img src={Stars} alt="Logo Estrellas"/>
                    <span>$ 55.000</span>
                </Card>
                <Card>
                    <img src={ProductLogo} alt="Imagen Producto"/>
                    <h2>Farola Derecha</h2>
                    <h3>mazda, suzuki, audi</h3>
                    <img src={Stars} alt="Logo Estrellas"/>
                    <span>$ 55.000</span>
                </Card>
                
            </Container>

}

export default Product;