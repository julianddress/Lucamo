import React from "react";
import { HomeProducts } from "../../Components/index";
// import ProductCardDetails from "../../Components/Client/ProductCardDetails"; 
import {useProductDetails} from "../../Context/useProductDetails"

const StockSection = () => {

    // Hooks reutilizables
    const { showDetails, openDetails, closeDetails } = useProductDetails();

    return (
        <section className="relative bg-[var(--background-color-secondario)]">
            <div className="p-4 flex justify-center">
                <HomeProducts onShowDetails={openDetails} />
                {/* {showDetails && <ProductCardDetails onCloseDetails={closeDetails} />} */}
            </div>
        </section>
    );
};

export { StockSection };
