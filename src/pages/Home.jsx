import { MainLayout } from "../Layouts/MainLayout";
import { BannerSection, StockSection } from "../Sections";
import { CartProvider } from "../Context/CartContext";
import { CartLogo } from "../Components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "@/Supabase/supbaseClient";
import { useState } from "react";
import { useAuth } from "@/Context/AuthContext";

const Home = () =>{
    
    return  <>

            <CartProvider>

                <MainLayout>
                    <CartLogo/>
                    <BannerSection/>
                    <StockSection/>
                </MainLayout>

            </CartProvider>

            </>
}

export default Home;