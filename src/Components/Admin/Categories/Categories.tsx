import { useState } from "react";
import { Label } from "@/Components/Shared/UI/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/Shared/UI/select";

export function Categories({ onSelect }: { onSelect: (category: string, subCategory: string) => void }) {
    const [category, setCategory] = useState<string>("");
    const [subCategory, setSubCategory] = useState<string>("");

    const handleCategoryChange = (value: string) => {
        setCategory(value);
        setSubCategory(""); // Reset subcategory when category changes
        onSelect(value, ""); // Pass selected category and empty subcategory to parent
    };

    const handleSubCategoryChange = (value: string) => {
        setSubCategory(value);
        onSelect(category, value); // Pass category and selected subcategory to parent
    };

    const subCategoriesOptions = category === "importado" 
        ? [
            { value: "exploradoras", label: "Exploradoras" },
            { value: "barras", label: "Barras" },
            { value: "bombillos", label: "Bombillos" },
            { value: "licuadoras", label: "Licuadoras" },
            { value: "farolas", label: "Farolas" },
            { value: "industrial", label: "Industrial" },
        ]
        : category === "nacional"
        ? [
            { value: "caterpillar", label: "Caterpillar" },
            { value: "simoniz", label: "Simoniz" },
        ]
        : [];

    return (
        <div className="flex gap-4">
            <div className="flex-1">
                <Label htmlFor="category">Categoria</Label>
                <Select value={category} onValueChange={handleCategoryChange}>
                    <SelectTrigger className="mt-2 bg-orange-50">
                        <SelectValue placeholder="Seleccione la categoria" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="importado">Producto Importado</SelectItem>
                        <SelectItem value="nacional">Producto Nacional</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex-1">
                <Label htmlFor="subCategory">Sub categoria</Label>
                <Select value={subCategory} onValueChange={handleSubCategoryChange} disabled={!category}>
                    <SelectTrigger className="mt-2 bg-orange-50">
                        <SelectValue placeholder="Seleccione la sub categoria" />
                    </SelectTrigger>
                    <SelectContent>
                        {subCategoriesOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
