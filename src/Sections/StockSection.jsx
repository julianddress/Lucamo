import React from "react";
import { HomeProducts } from "../Components/HomeProducts";
import { CartLogo } from "../Components";
import ProductCardDetails from "../Components/ProductCardDetails"; 
import {useProductDetails} from "../Context/useProductDetails"

const StockSection = () => {

    // Hooks reutilizables
    const { showDetails, openDetails, closeDetails } = useProductDetails();

    return (
        <section className="relative bg-[var(--background-color-secondario)]">
            <CartLogo />
            <div className="p-4">
                <HomeProducts onShowDetails={openDetails} />
                {showDetails && <ProductCardDetails onCloseDetails={closeDetails} />}
            </div>
        </section>
    );
};

export { StockSection };
