import { Card, CardContent } from "@/Components/Shared/UI/Card"
import { Badge } from "@/Components/Shared/UI/Badge"
import { Separator } from "@/Components/Shared/UI/separator"
import { Package, Truck, ShieldCheck } from "lucide-react"

interface ProductAvailability {
    quantity: number
}

const ProductAvailability = ({ quantity }: ProductAvailability ) => {
    return (
        <Card className="w-full mx-5 py-5 lg:w-[60%] shadow-lg">
            <CardContent className="flex flex-col space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold pr-2">Disponibilidad:</span>
                    <Badge variant={quantity > 0 ? "available" : "notAvailable"}>
                        {quantity > 0 ? "En Stock" : "Agotado"}
                    </Badge>
                </div>
                <div className="text-2xl font-bold text-green-700">{quantity} unidades</div>
                <Separator />
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                            <Package className="w-5 h-5 text-blue-600" />
                            <span>Envío gratis en pedidos +$100.000 cop</span>
                    </div>
                    <div className="flex items-center gap-2">
                            <Truck className="w-5 h-5 text-blue-600" />
                            <span>Entrega estimada: 3-5 días hábiles</span>
                    </div>
                    <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-blue-600" />
                            <span>Ya tienes credito con nosotros? Escribenos al whatsapp</span>
                    </div>
                </div>
                <Separator />
                <p className="text-sm text-muted-foreground text-center">
                    {quantity > 0 ? 
                        `¡Últimas ${quantity} unidades disponibles!` 
                    :
                        "No hay unidades disponible por ahora"
                    }
                </p>
            </CardContent>
        </Card>
    )
}

export default ProductAvailability;

