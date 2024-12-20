import React from "react";
import { MainLayout } from "../Layouts/MainLayout";
import { BannerSection, StockSection } from "../Sections";
import { CartProvider } from "../Context/CartContext";

const Home = () =>{

    return  <>

            <CartProvider>

                <MainLayout>
                    <BannerSection/>
                    <StockSection/>
                </MainLayout>

            </CartProvider>

            </>
}

export default Home;