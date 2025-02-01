// Hook para manejar la subida de imagenes al Bucket de supabase ( product-images )

import { useState } from "react";
import { supabase } from "@/Supabase/supbaseClient";
import { useAlert } from "@/Context/AlertContext";
import { v4 as uuidv4 } from "uuid";
import { useFormData } from "@/Context/FormDataContext";

export const useImageUpload = (onImagesChange: (images: string[]) => void) => {

    const [images, setImages] = useState < string[] > ([]);
    const [uploading, setUploading] = useState(false);
    const {FormData} = useFormData();
    const { showSuccessAlert, showErrorAlert, showInfoAlert, showLoadingAlert } = useAlert();

    // Función para manejar el envio de images al bucket
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {

        e.preventDefault()
        showLoadingAlert("Por favor espere, subiendo imagen..")        
        showInfoAlert("No olvides borrar la foto sí no creas el producto")
        
        const files = e.target.files;
        if (files) {
            setUploading(true);
            const imageUrls: string[] = [];

            for (const file of Array.from(files)) {
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
                    showErrorAlert("Error al subir la imagen en supabase");
                    setUploading(false);
                    return;
                }

                // Obtener la URL pública
                const { data: publicUrlData } = supabase.storage
                    .from("product-images")
                    .getPublicUrl(filePath);

                // Guardar la URL pública
                imageUrls.push(publicUrlData.publicUrl); 
            }

            // Actualizar el estado local con las URLs generadas
            const updatedImages = [...images, ...imageUrls].slice(0, 4);
            showSuccessAlert("La imagen ha sido guardada exitosamente");
            setImages(updatedImages);
            onImagesChange(updatedImages);
            setUploading(false);

            console.log("Images es: ", updatedImages)
        }
    };

    // Función para eliminar la imagen de la vista y del bucket
    const handleDeleteImage = async (imageUrl: string) => {

        // Eliminar la imagen del estado
        const updatedImages = images.filter((image) => image !== imageUrl);
        setImages(updatedImages);
        onImagesChange(updatedImages);

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
            
            showErrorAlert(errorMessage);

        }else {
            showSuccessAlert("La Imagen ha sido eliminada con éxito");
        }
    };

    return { images, setImages, uploading, handleImageUpload, handleDeleteImage };
};

