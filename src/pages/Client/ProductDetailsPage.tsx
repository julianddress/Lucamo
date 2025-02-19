import { ClientLayout } from "@/Layouts/ClientLayout";
import { CartProvider } from "@/Context/CartContext";
import { CartLogo } from "@/Components/Client/Cart/cart-logo";
import { ProductProvider } from "@/Context/productContext";
import ProductOverView from "@/Components/Client/ProductOverView/ProductOverView";

const ProductDetailsPage = () =>{
    
    return  <>
                <ProductProvider>
                <CartProvider>

                    <ClientLayout>
                        <CartLogo/>
                        <ProductOverView />
                    </ClientLayout>

                </CartProvider>
                </ProductProvider>
            </>
}

export default ProductDetailsPage;