import { useState, useEffect } from "react";
import { Label } from "@/Components/Shared/UI/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/Shared/UI/select";
import useForm from "@/Hooks/Admin/useForm";
import { useFormData } from "@/Context/FormDataContext";

interface CategoriesProps {
    onSelect: (field: string, value: string) => void;
}

export function Categories({ onSelect }: CategoriesProps) {

    const [category] = useForm();
    const [categoryies, setCategories] = useState<string>("");
    const [subCategories, setSubCategories] = useState<string>("");
    const { FormData } = useFormData();

    // Renderiza para editar un producto
    useEffect(() => {
        setCategories(FormData.category)
        setSubCategories(FormData.sub_category);   
    }, [ FormData.id, category, FormData.category, FormData.sub_category ]);

    const handleCategoryChange = (value: string) => {
        setCategories(value);
        setSubCategories(""); // Reset subcategories when category changes
        onSelect(categoryies, " ");
    };

    const handleSubCategoryChange = (value: string ) => {
        setSubCategories(value);
        onSelect(categoryies, value);
    };

    const subCategoriesOptions = categoryies === "importado" 
        ? [
            { value: "exploradoras", label: "Exploradoras" },
            { value: "barras", label: "Barras" },
            { value: "bombillos", label: "Bombillos" },
            { value: "licuadoras", label: "Licuadoras" },
            { value: "farolas", label: "Farolas" },
            { value: "industrial", label: "Industrial" },
        ]
        : categoryies === "nacional"
        ? [
            { value: "caterpillar", label: "Caterpillar" },
            { value: "simoniz", label: "Simoniz" },
        ]
        : [];

    return (
        <div className="flex gap-4">
            <div className="flex-1">
                <Label htmlFor="category">Categoria</Label>
                <Select value={categoryies} onValueChange={handleCategoryChange}>
                    <SelectTrigger className="mt-2 bg-orange-50">
                        <SelectValue placeholder="Seleccione la categoria"  />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectItem value="importado">Producto Importado</SelectItem>
                        <SelectItem value="nacional">Producto Nacional</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex-1">
                <Label htmlFor="subCategory">Subcategoria</Label>
                <Select value={subCategories} onValueChange={handleSubCategoryChange} disabled={!categoryies}>
                    <SelectTrigger className="mt-2 bg-orange-50">
                        <SelectValue placeholder="Seleccione la subcategoria" />
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
