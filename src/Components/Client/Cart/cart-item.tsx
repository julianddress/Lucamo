import { Button } from '@/Components/Shared/UI/button'
import { Card } from '@/Components/Shared/UI/Card';
import { useCart } from '@/Context/CartContext'
import useForm from '@/Hooks/Admin/useForm';
import { Loader, Minus, Plus, Trash2 } from 'lucide-react'
import EmptyCart from './empty-cart';
import { useAuth } from '@/Context/AuthContext';

function CartItem() {

    const { cartProducts, removeFromCart, amount, increaseQuantity, decreaseQuantity, loadingProducts } = useCart();
    const {session} = useAuth();
    const [ , , images] = useForm();

    return <>
        <Card className='flex flex-col shadow-custom mx-4 lg:mr-0 px-6 pt-5 pb-16'>
            { cartProducts.length > 0 ?  
            <>
                
                <h1 className="text-lg sm:text-2xl font-bold ">Carrito de Compras</h1>
                <span className='text-xs sm:text-sm self-end pb-2 sm:pb-4'>Precio</span>

                {cartProducts.map((product) => {

                    const quantity = amount.find((item) => item.product_id === product.id ) 
                    const prod_image = images.find((img) => img.id_product === product.id )
                    
                        return (
                                <div key={product.id} className="flex-grow border-t-[1px] border-gray-300 border-solid">
                                    <div className="flex flex-row items-center gap-4 border-b py-4">
                                        <img
                                            src={prod_image?.image_url_1}
                                            alt={product.name}
                                            className="object-cover rounded w-[25%] h-[25%]"
                                            />
                                        <div className="flex-grow w-[40%]">
                                            <h3 className="text-sm sm:text-xl font-semibold pb-3">{product.name}</h3>
                                            <p className="text-xs sm:text-sm text-gray-600 mb-[6%] w-[80%] line-clamp-2 pb-4">{product.description}</p>
                                            <div className="flex items-center gap-2 sm:gap-5">
                                            { loadingProducts[product.id] ? 
                                                <Loader className="h-4 w-4 animate-spin" /> 
                                            : 
                                                <>
                                                    <Button 
                                                        variant="outline" 
                                                        size="icon"
                                                        disabled={loadingProducts[product.id]}
                                                        onClick={() => {
                                                            if(session) decreaseQuantity(session.user.id, product.id)
                                                        }}
                                                        className='hover:bg-primary hover:text-white shadow-md h-6 w-6 sm:h-9 sm:w-9'
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </Button>
                                                        <span className="w-5 sm:w-8 text-center">{quantity?.quantity}</span>
                                                    <Button 
                                                        variant="outline" 
                                                        size="icon" 
                                                        disabled={loadingProducts[product.id]}
                                                        onClick={() => {
                                                            if(session) increaseQuantity(session.user.id, product.id)
                                                        }}
                                                        className='hover:bg-primary hover:text-white shadow-md h-6 w-6 sm:h-9 sm:w-9'
                                                    >
                                                            <Plus className="h-4 w-4" />
                                                    </Button>
                                                </>
                                            }
                                                <Button variant="destructive" size="icon" onClick={() => removeFromCart(product.id)} className='h-6 w-6 sm:h-9 sm:w-9 hover:bg-red-800'>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                        { loadingProducts[product.id] ? 
                                                <Loader className="h-8 w-8 animate-spin" /> 
                                        :   <>
                                                <p className="text-xs sm:text-base font-bold mt-5">
                                                    $ { (parseFloat(product.price) * (quantity?.quantity || 1)).toLocaleString("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }
                                                </p>
                                            </>
                                        }
                                    </div>
                                </div>
                        )
                    })
                }
            </>
            : <EmptyCart /> }
        </Card>
    </>
}

export default CartItem