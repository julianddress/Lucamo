import { Input } from "@/Components/Shared/UI/input";
import { Label } from "@/Components/Shared/UI/label";
import { Textarea } from "@/Components/Shared/UI/textarea";
import { useFormData } from "@/Context/FormDataContext";

interface FormProps {
    children?: React.ReactNode;
    onChange: ( field: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement > ) => void;
}

export function Form({ children, onChange }: FormProps) {

    const { FormData } = useFormData();

    return (
        <div className="space-y-6 mt-6">
            <div>
                <Label htmlFor="reference">Referencia</Label>
                <Input
                required
                variant="violet"
                className="mt-2"
                id="reference"
                placeholder="ej: PI-LAMP-RED"
                value={FormData?.reference}
                onChange={(e) => onChange("reference", e)}
                aria-label="Ingrese la referencia del producto"
                />
            </div>
            <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                required
                variant="violet"
                className="mt-2"
                id="name"
                placeholder="ej: Lámpara redonda 12v tipo industrial"
                value={FormData?.name}
                onChange={(e) => onChange("name", e)}
                aria-label="Ingrese el nombre del producto"
                />
            </div>
            <div>
                <Label htmlFor="quantity">Cantidad</Label>
                <Input
                required
                variant="violet"
                className="mt-2"
                id="quantity"
                type="number"
                min="0"
                placeholder="ej: 20"
                value={FormData?.quantity}
                onChange={(e) => onChange("quantity", e)}
                aria-label="Ingrese la cantidad del producto"
                />
            </div>
            <div>
                <Label htmlFor="price">Precio</Label>
                <Input
                required
                variant="violet"
                className="mt-2"
                id="price"
                type="number"
                step="any"
                placeholder="ej: 25000"
                value={FormData?.price}
                onChange={(e) => onChange("price", e)}
                aria-label="Ingrese el precio del producto"
                />
            </div>
            <div>
                <Label htmlFor="discount">Descuento y/o Promoción (%)</Label>
                <Input
                variant="violet"
                className="mt-2"
                id="discount"
                type="text"
                placeholder="ej: 50% OFF - Antes $40.000"
                value={FormData?.discount}
                onChange={(e) => onChange("discount", e)}
                aria-label="Ingrese el descuento del producto"
                />
            </div>

            {children}

            <div>
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                id="description"
                required
                placeholder="Ingresar la descripción del producto"
                className="mt-2 h-20"
                value={FormData?.description}
                onChange={(e) => onChange("description", e)}
                aria-label="Ingrese la descripción del producto"
                />
            </div>

        </div>
    );
}
