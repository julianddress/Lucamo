import { ClientLayout } from "../../Layouts/ClientLayout";
import { BannerSection, StockSection } from "../../Sections";
import { CartProvider } from "../../Context/CartContext";
import { CartLogo } from "../../Components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "@/Supabase/supbaseClient";
import { useState } from "react";
import { useAuth } from "@/Context/AuthContext";

const Home = () =>{
    
    return  <>

            <CartProvider>

                <ClientLayout>
                    <CartLogo/>
                    <BannerSection/>
                    <StockSection/>
                </ClientLayout>

            </CartProvider>

            </>
}

export default Home;