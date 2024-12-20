import React from "react";
import styled from "styled-components";
import { HomeProducts } from "../Components/HomeProducts";
import { CartLogo } from "../Components";
import ProductCardDetails from "../Components/ProductCardDetails"; 
import {useProductDetails} from "../Context/useProductDetails"

const Section = styled.section`
    background-color: var(--background-color-secundario);
    position: relative;
`;

const Products = styled.div`
    padding: 50px;
`;

const StockSection = () => {

    // Hooks reutilizables
    const { showDetails, openDetails, closeDetails } = useProductDetails();

    return (
        <Section>
            <CartLogo />
            <Products>
                <HomeProducts onShowDetails={openDetails} />
                {showDetails && <ProductCardDetails onCloseDetails={closeDetails} />}
            </Products>
        </Section>
    );
};

export { StockSection };
