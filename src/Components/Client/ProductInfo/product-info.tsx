import { Button } from "@/Components/Shared/UI/button"
import { useAlert } from "@/Context/AlertContext";
import { useAuth } from "@/Context/AuthContext";
import { useCart } from "@/Context/CartContext";
import { useProduct } from "@/Context/productContext"
import useForm from "@/Hooks/Admin/useForm";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Heart, Star } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductInfo() {

    const {selected, featuredProducts} = useProduct();

    const product = featuredProducts.find( (item) => item.id === selected)
    const [isProductAdded, setIsProductAdded] = useState(false);
    const { showSuccessAlert, showInfoAlert } = useAlert();
    const { addToCart, cartProducts } = useCart();
    const navigate = useNavigate();
    const {session} = useAuth();
    const [, category] = useForm();

    // Función para controlar el contador del carrito
    const handleIncrementCart = () => {
        if(session && product){
            if(!isProductAdded && !cartProducts.some(item => item.id === product.id)){
                addToCart(product);
                showSuccessAlert(`( ${product.name} ) fue añadida al carrito`);
                setIsProductAdded(true)
            } else {
                showInfoAlert(`Este producto ya fue añadido al carrito`);
            }
        } else {
            navigate('/signin');
        }
    }

    const categoria = category.find((item) => item.id_product == product?.id )

    return <>

                <div className="flex flex-col space-y-4 p-8 h-full">
                    <div className="space-y-2">
                        <p className="text-sm text-gray-500">{product?.reference}</p>
                        <h1 className="text-3xl font-luckiest">{product?.name}</h1>
                    </div>
                    <p className="text-gray-600 text-sm/5 mt-2">
                        {product?.description}
                    </p>
                    <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                        ))}
                    </div>
                    <div className="flex bg-[#FAFAF0] w-max rounded-xl">
                        <div className="p-4">
                            <Label className="text-[10px] text-neutral-400">Categoria</Label>
                            <p className="text-base font-semibold pt-2">{categoria?.category}</p>
                        </div>
                        <div className="p-4">
                            <Label className="text-[10px] text-neutral-400">Color</Label>
                            <p className="text-base font-semibold pt-2">Negro</p>
                        </div>
                        <p className="text-xl p-6 font-sans font-bold">$ {product?.price}</p>
                    </div>
                    <div className="flex space-x-4 items-end flex-1">
                    {cartProducts.some(item => item.id === product?.id) ? ( 
                        <Button className="flex-1"
                        >
                            Ya esta en tu carrito !
                        </Button>
                    ): (
                        <Button className="flex-1"
                            onClick={() => handleIncrementCart()}
                        >
                            Añadir al carrito
                        </Button>
                    ) }
                        <Button variant="outline" className="px-3 bg-[#FAFAF0]">
                            <Heart className="w-5 h-5" />
                            <span className="sr-only ">Añadir a favoritos</span>
                        </Button>
                    </div>
                </div>

    </>
}

export default ProductInfo

