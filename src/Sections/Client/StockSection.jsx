import React from "react";
import { HomeProducts } from "../../Components/index";
import ProductCardDetails from "@/Components/Client/ProductCardDetails/product-card-details";
import {useProductDetails} from "../../Hooks/Client/useProductDetails"

const StockSection = () => {

    const { showDetails, openDetails, closeDetails } = useProductDetails();

    return (
        <section className="relative bg-[var(--background-color-secondario)]">
            <div className="p-4 flex justify-center">
                <HomeProducts onShowDetails={openDetails} />
                {showDetails && <ProductCardDetails onCloseDetails={closeDetails} />}
            </div>
        </section>
    );
};

export { StockSection };
