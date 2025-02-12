import ProductCard from '../ProductCard/product-card';
import useForm from '@/Hooks/Admin/useForm';
import { useCart } from '@/Context/CartContext';
import { useProduct } from '@/Context/productContext';

interface HomeProductsProps {
    onShowDetails: () => void;
}

export default function HomeProducts({ onShowDetails }: HomeProductsProps) {

    const { featuredProducts } = useProduct();
    const [, , images] = useForm();
    const {addToCart} = useCart()

    return (
        <div className="container mx-auto flex flex-col gap-5 lg:w-[90%] rounded-3xl md:rounded-[3rem] 
                        p-5 m-3 md:p-10  md:m-10 shadow-custom bg-white"
        >
                <h1 className="text-center text-lg md:text-3xl md:mb-5 font-hammersmith font-medium">PRODUCTOS DESTACADOS</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5 ">
                    {featuredProducts.map((product) => {

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
        </div>
    )
}