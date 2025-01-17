import { Input } from "@/Components/Shared/UI/input";
import { Label } from "@/Components/Shared/UI/label";
import { Textarea } from "@/Components/Shared/UI/textarea";

interface FormProps {
    onChange: (field: string, value: string | number | boolean) => void;
    children: React.ReactNode;
}

export function Form({ onChange, children }: FormProps) {

    const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
        onChange(field, value);
    };

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
                    onChange={handleInputChange("reference")}
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
                    placeholder="ej: Lampara redonda 12v tipo industrial"
                    onChange={handleInputChange("name")}
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
                    onChange={handleInputChange("quantity")}
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
                    placeholder="ej: 25,000"
                    onChange={handleInputChange("price")}
                    aria-label="Ingrese el precio del producto"
                />
            </div>
            <div>
                <Label htmlFor="discount">Descuento y/o Promoción (%)</Label>
                <Input
                    required
                    variant="violet"
                    className="mt-2"
                    id="discount"
                    type="text"
                    placeholder="ej: 50% OFF - Antes $40.000"
                    onChange={handleInputChange("discount")}
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
                    onChange={handleInputChange("description")}
                    aria-label="Ingrese la descripción del producto"
                />
            </div>
        </div>
    );
}
