import { useCart } from '../../../Context/CartContext'
import { Eye, Tag } from 'lucide-react'
import { Card, CardContent } from "../../Shared/UI/Card"
import {ImageCard} from "../../Shared/UI/ImageCard"
import { Badge } from "../../Shared/UI/Badge"
import { useNavigate} from 'react-router-dom'
import { useAuth } from '@/Context/AuthContext'

//  # Subcomponente para cada producto

interface ProductCardProps {
        title: string
        price: number
        imageUrl: string
        discount?: string
        onAdd?: () => void
        onShowDetails?: () => void;
}

export default function ProductCard({ 
        title, 
        price, 
        imageUrl,
        discount,
        onAdd,
        onShowDetails
    }: ProductCardProps) {

    const { incrementCart } = useCart();

    const { session } = useAuth(); // Verifica el estado del usuario
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (!session) {
            // Si el usuario no está autenticado, redirige al inicio de sesión
            navigate('/signin');
        } else {
            // Si está autenticado, añade al carrito
            incrementCart();
            if (onAdd) onAdd(); // Callback 
        }
    };

    return  <> 
                <Card className="group relative overflow-hidden transition-all shadow-custom2 h-25 w-15">

                    <CardContent className="flex flex-col">

                        {discount && (
                        <Badge 
                            variant="destructive" 
                            className="absolute left-2 top-2 z-10"
                        >
                            <Tag className="w-4 h-4 mr-1 lg:w-8 lg:h-6 lg:mr-2" />
                                {discount}
                        </Badge>
                        )}

                        <div className="relative overflow-hidden bg-white">
                            <ImageCard 
                                imageUrl={imageUrl}
                                altText={title}
                            />
                            
                            {/* Vista Rápida overlay */}
                            <div 
                                className="hidden absolute inset-x-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out cursor-pointer sm:block"
                                onClick={onShowDetails}
                            >
                                <div className="bg-black/70 backdrop-blur-sm p-2 text-center">
                                    <span className="text-white text-base font-medium flex items-center justify-center">
                                        <Eye className="w-4 h-8 mr-1" />
                                        VISTA RÁPIDA
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Separador */}
                        <div className='before:absolute before:left-0 before:w-full before:h-1 before:bg-neutral-300'/>

                        <div className=" grid grid-rows-2 p-2 gap-1 items-center justify-items-center
                                        sm:gap-1
                                        lg:grid-cols-3 lg:p-5 lg:gap-2"
                        >
                            <h3 className="text-xs font-bold text-gray-950 line-clamp-2 text-center
                                        sm:col-span-3
                                        lg:text-3xl"
                            >
                                {title}
                            </h3>
                            <div className="self-center w-max col-span-1 row-span-1 items-center rounded-xl bg-green-200 px-2.5 py-1 text-sm font-semibold text-slate-900 
                                        sm:text-base sm:px-3 sm:py-1.5 sm:col-span-2
                                        lg:text-2xl lg:px-4 lg:py-2 lg:col-span-2"
                            >
                                <span>
                                    ${price.toFixed(2)}
                                </span>
                            </div>
                            <button
                                className="hidden h-8 px-3 w-max text-white rounded-lg bg-green-700 backdrop-blur hover:bg-green-900
                                        sm:h-6 sm:px-1 sm:rounded-md sm:block
                                        lg:justify-self-end lg:w-full lg:h-9"
                                onClick={handleAddToCart}
                            >
                                <span className="sm:text-xs lg:text-xl" onClick={incrementCart} > 
                                    Añadir
                                </span>
                            </button>
                        </div>

                    </CardContent>
                </Card>                  
            </> 
}

export {ProductCard};