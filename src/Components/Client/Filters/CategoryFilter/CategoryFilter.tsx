import { Checkbox } from "@/Components/Shared/UI/checkbox"

export default function CategoryFilter() {
    return (
        <div className="mb-6">
            <h3 className="font-medium mb-2">Categoria</h3>
            <div className="space-y-2">
                <label className="flex items-center">
                    <Checkbox id="importado" />
                    <span className="ml-2">Importados</span>
                </label>
                <label className="flex items-center">
                    <Checkbox id="nacional" />
                    <span className="ml-2">Nacionales</span>
                </label>
            </div>
        </div>
    )
}

