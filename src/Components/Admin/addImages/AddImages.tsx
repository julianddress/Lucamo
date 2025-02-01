import { useEffect } from "react";
import { Plus } from "lucide-react";
import { Input } from "@/Components/Shared/UI/input";
import { Label } from "@/Components/Shared/UI/label";
import { useImageUpload } from "@/Hooks/Admin/useImageUpload";
import { useImageUpdate } from "@/Hooks/Admin/useImageUpdate";
import useEditProduct from "@/Hooks/Admin/useEditProduct";
import DeleteImage from "../DeleteImage/DeleteImage";
import { ProductImages } from "@/Types/productTypes";
import { useFormData } from "@/Context/FormDataContext";

interface AddImagesProps {
    onImagesChange?: (images: string[]) => void;
    onImagesEditChange?: (images: string[]) => void;
    prod_images?: ProductImages[];
}

export function AddImages({ onImagesChange = () => {}, onImagesEditChange = () => {}, prod_images }: AddImagesProps) {

    const { images, uploading, handleImageUpload, handleDeleteImage } = useImageUpload(onImagesChange);
    const { newImages, updating, updateNewImages, handleDeleteNewImage, handleNewImageUpload } = useImageUpdate(onImagesEditChange);  
    const { assignImages } = useEditProduct()
    const { FormData } = useFormData();

    // Renderiza para obtener los datos del producto
    useEffect(() => {
        const result = async () => {
            if(FormData && prod_images && newImages.length === 0){
                const data = await assignImages(FormData, prod_images);
                if(data){
                    updateNewImages(data)
                }
            }
        }
        result();
    }, []); // Solo una vez

    // Determinar las imágenes a renderizar (modo edición o nuevo producto)
    const renderImages = FormData ? newImages : images;

    return (
        <div className="space-y-2">
        <Label htmlFor="images">Imagenes del producto ( Max 4 )</Label>
        <div className="grid grid-cols-2 gap-4">
            {Array(4)
            .fill(0)
            .map((_, i) => (
                <div
                key={i}
                className="aspect-square relative border rounded-lg overflow-hidden"
                >
                {renderImages[i] ? (
                    <div className="flex group">
                    <img
                        src={renderImages[i]}
                        alt={`Product image ${i + 1}`}
                        className="object-cover w-full h-full"
                    />
                    <DeleteImage
                        imageUrl={renderImages[i]}
                        onDelete={ FormData ? handleDeleteNewImage : handleDeleteImage }
                    />
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                    </div>
                )}
                </div>
            ))}
        </div>
        <Input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={ FormData ? handleNewImageUpload : handleImageUpload}
            className="mt-2"
            disabled={FormData ? updating : uploading}
            required={FormData ? false : true}
        />
        </div>
    );
}
