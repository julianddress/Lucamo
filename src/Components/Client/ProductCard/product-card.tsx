import { useCart } from "@/Context/CartContext"
import { Eye, EyeClosed , Tag   } from 'lucide-react'
import { Card, CardContent } from "../../Shared/UI/Card"
import {ImageCard} from "../../Shared/UI/ImageCard"
import { Badge } from "../../Shared/UI/Badge"
import { useState } from "react"
import { useProduct } from "@/Context/productContext"
import { useAlert } from "@/Context/AlertContext"
import { useAuth } from "@/Context/AuthContext"
import { useNavigate } from "react-router-dom"
import { AddToCartButton } from "../AddToCartButton/AddToCartButton"

interface ProductCardProps {
        id: string;
        title: string
        price: string
        imageUrl?: string
        discount?: string
        onAdd: () => void
        onShowDetails: () => void;
}

export default function ProductCard({ 
        id,
        title, 
        price, 
        imageUrl,
        discount,
        onAdd,
        onShowDetails
    }: ProductCardProps) {

    const { selectedProduct } = useProduct();    
    const navigate = useNavigate();
    const [isHoveringQuickView, setIsHoveringQuickView] = useState(false);
    const { incrementCart, cartProducts } = useCart();
    const {session} = useAuth();
    const { showSuccessAlert, showInfoAlert } = useAlert();

    const isInCart = cartProducts.some(product => product.id === id);

    // Función para controlar el contador del carrito
    const handleIncrementCart = () => {
        if(session){
            if(!isInCart){
                onAdd();
                incrementCart();
                showSuccessAlert(`( ${title} ) fue añadida al carrito`);
            } else {
                showInfoAlert(`Este producto ya fue añadido al carrito`);
            }
        } else {
            navigate('/signin');
        }
    }

    return  <> 
                <Card className="group relative overflow-hidden transition-all shadow-custom2 h-25 w-15">

                    <CardContent className="flex flex-col px-0 py-4 cursor-pointer">

                        {discount && (
                        <Badge 
                            variant="destructive" 
                            className="absolute place-content-center min-w-[30%] max-w-[80%] sm:max-w-40 lg:max-w-48 left-2 top-2 z-10 text-[10px] lg:text-sm lg:p-1.5 truncate"
                        >
                            <Tag className="w-4 h-4 pr-1 lg:w-6 lg:h-5" />
                                {discount}
                        </Badge>
                        )}

                        <div className="relative overflow-hidden bg-white">

                            {/* Product Image */}
                            <ImageCard 
                                imageUrl={imageUrl || ''}
                                altText={title}
                            />
                            
                            {/* Vista Rápida overlay */}
                            <div 
                                className="hidden absolute inset-x-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out sm:block"
                                onMouseEnter={() => setIsHoveringQuickView(true)}
                                onMouseLeave={() => setIsHoveringQuickView(false)}
                                onClick={() => {
                                    onShowDetails();
                                    selectedProduct(id)
                                }}
                            >
                                <div className="bg-black/70 backdrop-blur-sm p-2 text-center">
                                    <span className="text-white text-base font-medium flex items-center justify-center">
                                    {isHoveringQuickView ? (
                                            <Eye className="w-4 h-8 mr-1" />
                                        ) : (
                                            <EyeClosed className="w-4 h-8 mr-1" />
                                        )}
                                        Vista Rapida
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Separador */}
                        <div className='before:absolute before:left-0 before:w-full before:h-1 before:bg-cyan-600'/>

                        {/* Product Info */}
                        <div className=" flex flex-col pt-5 gap-1 sm:gap-4 items-center justify-items-center px-2 sm:px-4 lg:px-6"
                        >
                            <h3 className="min-h-10 text-[12px] sm:text-sm font-bold text-gray-950 line-clamp-2 text-center"
                            >
                                {title}
                            </h3>
                            <div className='w-full flex flex-row justify-between items-center'>
                                <div className="self-center w-max rounded-lg bg-blue-200 px-2.5 py-1 text-sm font-semibold text-blue-950 
                                            sm:text-base sm:px-3 sm:py-1.5
                                            lg:text-base lg:px-3 lg:py-1 "
                                >
                                    <span>
                                        ${price}
                                    </span>
                                </div>
                                <button
                                    className="cursor-none h-8 px-2 w-max text-white rounded-lg bg-green-700 backdrop-blur hover:bg-green-900
                                            lg:flex lg:items-center hover:text-green-200"
                                    onClick={handleIncrementCart}
                                >
                                    <AddToCartButton isInCart={isInCart} onClick={handleIncrementCart}/>
                                </button>
                            </div>
                        </div>

                    </CardContent>
                </Card>                  
            </> 
}