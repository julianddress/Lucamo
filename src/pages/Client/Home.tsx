import { ClientLayout } from "@/Layouts/ClientLayout";
import { BannerSection, StockSection } from "../../Sections";
import { CartProvider } from "@/Context/CartContext";
import { CartLogo } from "@/Components/Client/Cart/cart-logo";
import { ProductProvider } from "@/Context/productContext";
import { useRemoveToken } from "@/Hooks/Shared/useRemoveToken";

const Home = () =>{

    useRemoveToken();
    
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