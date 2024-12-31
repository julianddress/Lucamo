import { MainLayout } from "../Layouts/MainLayout";
import { BannerSection, StockSection } from "../Sections";
import { CartProvider } from "../Context/CartContext";
import { CartLogo } from "../Components";

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