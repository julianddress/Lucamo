import { ClientLayout } from "@/Layouts/ClientLayout";
import { BannerSection, StockSection } from "../../Sections";
import { CartProvider } from "@/Context/CartContext";
import { CartLogo } from "@/Components/Client/Cart/cart";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "@/Supabase/supbaseClient";
import { useState } from "react";
import { useAuth } from "@/Context/AuthContext";
import { ProductProvider } from "@/Context/productContext";

const Home = () =>{
    
    return  <>
                <ProductProvider>
                <CartProvider>

                    <ClientLayout>
                        <CartLogo/>
                        <BannerSection/>
                        <StockSection/>
                    </ClientLayout>

                </CartProvider>
                </ProductProvider>
            </>
}

export default Home;