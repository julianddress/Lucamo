import { Checkbox } from "@/Components/Shared/UI/checkbox"

export default function SubcategoryFilter() {
    return (
        <div className="mb-6">
            <h3 className="font-medium mb-2">Subcategoria</h3>
            <div className="space-y-2">
                <label className="flex items-center">
                    <Checkbox id="barras" />
                    <span className="ml-2">Barras</span>
                </label>
                <label className="flex items-center">
                    <Checkbox id="farolas" />
                    <span className="ml-2">Farolas</span>
                </label>
                <label className="flex items-center">
                    <Checkbox id="bombillos" />
                    <span className="ml-2">Bombillos</span>
                </label>
                <label className="flex items-center">
                    <Checkbox id="exploradoras" />
                    <span className="ml-2">Exploradoras</span>
                </label>
                <label className="flex items-center">
                    <Checkbox id="industrial" />
                    <span className="ml-2">Industriales</span>
                </label>
                <label className="flex items-center">
                    <Checkbox id="licuadoras" />
                    <span className="ml-2">Licuadoras</span>
                </label>
            </div>
        </div>
    )
}

