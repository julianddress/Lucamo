import { useState } from "react";
import { supabase } from "@/Supabase/supbaseClient";
import { v4 as uuidv4 } from "uuid";
import { useFormData } from "@/Context/FormDataContext";

export const useImageUpdate = (onImagesEditChange?: (images: string[]) => void) => {

    const [newImages, setNewImages] = useState<string[]>([]); 
    const [updating, setUpdating] = useState(false);
    const { FormData } = useFormData();
    
    // Función para mostrar newUmages en modo edición
    const updateNewImages = (images: string[]) => {
        if (onImagesEditChange) onImagesEditChange(images);
        setNewImages(images);
    };

    // Función para manejar el envio de images al bucket
    const handleNewImageUpload = async (event?: React.ChangeEvent<HTMLInputElement>) => {

        event?.preventDefault();

        const files = event?.target.files;
        setUpdating(true);
        if (!files || files.length === 0) return;

        const updatedImages = [...newImages];
        Array.from(files).forEach((file) => {

            const reader = new FileReader();
            reader.onload = async () => {

                const fileName = `${uuidv4()}-${file.name}`;
                const filePath =  `product-images/${FormData.reference}/${fileName}`;

                // Subir archivo al bucket
                const { error: uploadError } = await supabase.storage
                    .from("product-images")
                    .upload(filePath, file, {
                        cacheControl: "3600",
                        upsert: false,
                    });

                if (uploadError) {
                    console.error("Error al subir la imagen en supabase");
                    return;
                }

                // Obtener la URL pública
                const { data: publicUrlData } = supabase.storage
                    .from("product-images")
                    .getPublicUrl(filePath);

                const uploadedImageUrl = publicUrlData.publicUrl;

                // Guardar la URL pública en el Array
                updatedImages.push(uploadedImageUrl); 
                setNewImages(updatedImages);
                if (onImagesEditChange) onImagesEditChange(updatedImages);
                setUpdating(false);
            };
            reader.readAsDataURL(file);
        });
    };

    // Función para eliminar la imagen de la vista y del bucket
    const handleDeleteNewImage = async (imageUrl: string, event?: React.MouseEvent<HTMLButtonElement>) => {

        event?.preventDefault();
        // Eliminar la imagen del estado
        const updatedImages = newImages.filter((url) => url !== imageUrl);

        // Eliminar la imagen del bucket
        const filePath = `product-images/${FormData.reference}/${imageUrl.split("/").pop()}`;
        const { error: deleteError } = await supabase.storage
            .from("product-images")
            .remove([filePath]);

        if (deleteError) {
        
            // Verifica y extrae el mensaje del error, usando type assertion en caso de que sea un objeto con 'message'
            const errorMessage = (deleteError instanceof Error || (typeof deleteError === "object" && deleteError !== null)) 
                ? (deleteError as { message: string }).message 
                : "Ha ocurrido un error inesperado";
            
            console.error(errorMessage);

        }else {
            console.info("La Imagen ha sido eliminada con éxito");
        }

        setNewImages(updatedImages);
        if (onImagesEditChange) onImagesEditChange(updatedImages);
    };

    return {
        newImages,
        updating,
        updateNewImages,
        handleNewImageUpload,
        handleDeleteNewImage,
    };
}
