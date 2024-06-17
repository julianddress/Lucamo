import React from "react";
import styled from "styled-components";
import "../../App.css"
import ProductLogo from "../../assets/img/product.png"
import AddToCart from "../../assets/img/addToCart.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    border-radius: 50px;
    background-color: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.29);
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    flex: 8;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: max-content;
    width: max-content;
    position: relative;
    font-size: 20px;
    margin: 3%;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    
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
    button{
        border-radius: 10px;
        width: 50%;
        height: 10%;
        font-size: 20px;
        background-color: #84DC3E;
        color: white;
        border-style: none;
        padding: .5rem;
        margin: 1rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }
`;

const Add = styled.div`
    position: relative;
    width: auto;
    left: 40%;
    top: -1rem;
    img{
        position: absolute;
        width: 3rem;
    }
`;

const StockContainer = styled.div`
    height: 4rem;
    display: flex;
    justify-content: center;
    border: red solid .2rem;
`;

const Product = () => {
    return  <Container>
                <CardContainer>
                    <Card>
                        <Add>
                            <img src={AddToCart} alt="Add To Cart"/>
                        </Add>
                        <img src={ProductLogo} alt="Imagen Producto"/>
                        <h2>Farola Derecha</h2>
                        <h3>mazda, suzuki, audi</h3>
                        <button>Detalles</button>
                    </Card>
                    <Card>
                        <Add>
                            <img src={AddToCart} alt="Add To Cart"/>
                        </Add>
                        <img src={ProductLogo} alt="Imagen Producto"/>
                        <h2>Farola Derecha</h2>
                        <h3>mazda, suzuki, audi</h3>
                        <button>Detalles</button>
                    </Card>
                    <Card>
                        <Add>
                            <img src={AddToCart} alt="Add To Cart"/>
                        </Add>
                        <img src={ProductLogo} alt="Imagen Producto"/>
                        <h2>Farola Derecha</h2>
                        <h3>mazda, suzuki, audi</h3>
                        <button>Detalles</button>
                    </Card>
                </CardContainer>
                
                <StockContainer>

                </StockContainer>
                
            </Container>

}

export default Product;