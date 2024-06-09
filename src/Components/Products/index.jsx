import React from "react";
import styled from "styled-components";
import "../../App.css"
import { ColorSecundario, ColorBtns } from "../UI/variables";
import ShoppingLogo from "../../assets/img/shoppingCart.svg"
import Categoria from "./Categorias";
import Product from "./Product";

const StyledSection = styled.section`
    padding-top: 50px;
    background-color: ${ColorSecundario};
`;

const ShoppingCart = styled.div`
    span{
        padding-left: 20px;
        font-size: 24px;
        font-weight: bold;
    }
`;

const StyledCart = styled.div`
    position: relative;
    justify-content: center;
    background-color: ${ColorBtns};
    padding: 10px 0;
    width: 130px;
    border-radius: 0 50px 50px 0;
    span{
        position: absolute;
        right: 44%
    }
`;

const StyledData = styled.div`
    padding: 50px;
    display: grid;
    grid-template-columns: 1.5fr 5fr;
    gap: 80px;
`;

const Products = () => {
    return  <StyledSection>

                <ShoppingCart className="alinear-items">
                    <StyledCart className="alinear-items">
                        <img src={ShoppingLogo} alt="Logo Carrito de Compras" />
                        <span>0</span>
                    </StyledCart>
                    <span>Mi Carrito</span>
                </ShoppingCart>

                <StyledData>
                    <Categoria/>
                    <Product/>
                </StyledData>
                
            </StyledSection>
}

export default Products;