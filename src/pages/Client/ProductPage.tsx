import { CartLogo } from "@/Components/Client/Cart/cart-logo"
import { CartProvider } from "@/Context/CartContext"
import { ProductProvider } from "@/Context/productContext"
import { ClientLayout } from "@/Layouts/ClientLayout"
import ProductSection from "@/Sections/Client/ProductSection"

export default function Products() {
    return (
        <ProductProvider>
            <CartProvider>

                <ClientLayout>
                    <CartLogo/>
                    <ProductSection />
                </ClientLayout>
                
            </CartProvider>
        </ProductProvider>
    )
}

