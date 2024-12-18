import React from "react";
import { MainLayout } from "../Layouts/MainLayout";
import { BannerSection, StockSection } from "../Sections";

const Home = () =>{
    return  <>

            <MainLayout>
                <BannerSection/>
                <StockSection/>
            </MainLayout>

            </>
}

export default Home;