import { Button } from '@/Components/Shared/UI/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/Shared/UI/Card'
import { useCart } from '@/Context/CartContext'

function CartSummary() {

    const { cartProducts, amount } = useCart()

    // Calcular precios
    const subtotal = cartProducts.reduce((acc, product) => {
        const quantity = amount.find(item => item.product_id === product.id)?.quantity || 0;
        return acc + (parseFloat(product.price) * quantity);
    }, 0);
    const tax = 8.00;
    const total = subtotal + tax;

    return (
        <Card className="mx-4 sm:m-0 lg:w-[40%] shadow-custom ">
            <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between">
                    <span>Impuestos</span>
                    <span>${tax.toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Proceder al Pago</Button>
            </CardFooter>
        </Card>
    )
}

export default CartSummary