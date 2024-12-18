import React, { useState } from "react";
import styled from "styled-components";
import {HomeProducts} from "../Components/HomeProducts";
import ProductCardDetails from "../Components/ProductCardDetails"; 
import { CartLogo } from "../Components";

const Section = styled.section`
    background-color: var(--background-color-secundario);
    position: relative;
`;

const Products = styled.div`
    padding: 50px;
`;

const StockSection = () => {

    // HOOK - PRODUCT DETAILS
    const [ showDetails, setShowDetails] = useState(false);

    const openDetails = () =>{
        setShowDetails(true);
    }

    const closeDetails = () =>{
        setShowDetails(false);
    }

     // HOOK FOR CART LOGO
    const [count, setCount ] = useState(0);

    const incrementCart = () => {
        setCount(count + 1);
    }

    return  (
                <Section>

                    <CartLogo count={count} />
                    <Products>
                        <HomeProducts handleCounter={incrementCart} onShowDetails={openDetails}/>
                        {showDetails && <ProductCardDetails onCloseDetails={closeDetails} />}
                    </Products>

                </Section>
    )
}

export {StockSection};