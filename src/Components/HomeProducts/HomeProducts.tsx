import ProductCard from '../ProductCard/index';
import Iamgeproduct from '../../assets/img/farolaHella.jpg';

interface HomeProductsProps {
    onShowDetails?: (productId: number) => void;
}

export default function HomeProducts({ onShowDetails }: HomeProductsProps) {

    const products = Array.from({ length: 3 }, (_, i) => ({
        id: i + 1,
        title: "Farola Hella 1G0 996 134-001",
        price: 223200,
        imageUrl: `${Iamgeproduct}`,
        discount: i === 0 ? "50% OFF" : undefined
    }))

    return (
        <div className="container mx-auto flex flex-col gap-5 lg:w-[90%] rounded-3xl md:rounded-[3rem] 
                        p-5 m-3 md:p-10  md:m-10 shadow-custom bg-white"
        >
                <h1 className="text-center text-lg md:text-3xl md:mb-5 font-hammersmith font-medium">PRODUCTOS DESTACADOS</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5 ">
                    {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        discount={product.discount}
                        onAdd={() => console.log(`Added product ${product.id}`)}
                        onShowDetails={() => onShowDetails?.(product.id)}
                    />
                    ))}
                </div>
        </div>
    )
}