import { ClientLayout } from "@/Layouts/ClientLayout";
import { CartProvider } from "@/Context/CartContext";
import { ProductProvider } from "@/Context/productContext";
import CartSummary from "@/Components/Client/Cart/cart-summary";
import CartItem from "@/Components/Client/Cart/cart-item";

const Cart = () =>{
    
    return  <>
                <ProductProvider>
                <CartProvider>

                    <ClientLayout>
                        <div className="container mx-auto py-8">
                            <div className="flex flex-col lg:flex-row justify-center gap-8 pb-28">
                                <CartItem />
                                <CartSummary/>
                            </div>
                        </div>
                    </ClientLayout>

                </CartProvider>
                </ProductProvider>
            </>
}

export default Cart;