import { useProduct } from "@/Context/productContext";
import ProductCard from "../ProductCard/product-card"
import useForm from "@/Hooks/Admin/useForm";
import { useCart } from "@/Context/CartContext";

interface ProductGridProps {
    onShowDetails: () => void;
}

export default function ProductGrid({ onShowDetails }: ProductGridProps) {

    const { products } = useProduct();
    const [, , images] = useForm();
    const {addToCart} = useCart()
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => {

                    const renderImage = images.find((img) => img.id_product === product.id )

                        return (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                title={product.name}
                                price={product.price}
                                imageUrl={renderImage?.image_url_1}
                                discount={product.discount}
                                onAdd={() => addToCart(product)}
                                onShowDetails={() => onShowDetails()}
                            />
                    )
                })
            }
        </div>
    )
}