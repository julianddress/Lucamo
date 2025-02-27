import { useState } from "react";
import { supabase } from "@/Supabase/supbaseClient";
import { useAlert } from "@/Context/AlertContext";
import { v4 as uuidv4 } from "uuid";

export const useCarouselImageUpdate = (onImageEditChange: (image: string) => void) => {

    const [newImage, setNewImage] = useState<string | null>(null);
    const [updating, setUpdating] = useState(false);
    const { showSuccessAlert, showErrorAlert, showInfoAlert, showLoadingAlert } = useAlert();

    // Función para mostrar newImage en modo edición
    const updateNewImage = (image: string) => {
        if (onImageEditChange) onImageEditChange(image);
        setNewImage(image);
    };

    const handleNewImageUpload = async (file: File, event?: React.ChangeEvent<HTMLInputElement>) => {

        event?.preventDefault();

        if (!file) return;

        setUpdating(true);
        showLoadingAlert("Por favor espere, subiendo imagen...");
        showInfoAlert("No olvides borrar la foto si no creas el slide del carrusel");

        const fileName = `${uuidv4()}-${file.name}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from("carousel-images")
            .upload(filePath, file, {
                cacheControl: "3600",
                upsert: false,
            });

        if (uploadError) {
            showErrorAlert("Error al subir la imagen del carousel en supabase");
            console.log(uploadError)
            setUpdating(false);
            return;
        }

        const { data: publicUrlData } = supabase.storage.from("carousel-images").getPublicUrl(filePath);
        const uploadedImageUrl = publicUrlData.publicUrl;

        setNewImage(uploadedImageUrl);
        onImageEditChange(uploadedImageUrl);
        showSuccessAlert("La imagen ha sido guardada exitosamente");
        setUpdating(false);
    };

    const handleDeleteNewImage = async (event?: React.MouseEvent<HTMLButtonElement>) => {

        event?.preventDefault();

        if (!newImage) return;

        const filePath = `${newImage.split("/").pop()}`;
        const { error: deleteError } = await supabase.storage.from("carousel-images").remove([filePath]);

        if (deleteError) {
            const errorMessage = deleteError instanceof Error || (typeof deleteError === "object" && deleteError !== null)
                ? (deleteError as { message: string }).message
                : "Ha ocurrido un error inesperado";
            showErrorAlert(errorMessage);
            return;
        }

        setNewImage(null);
        onImageEditChange("");
        showSuccessAlert("La Imagen ha sido eliminada con éxito");
    };

    return { newImage, updating, handleNewImageUpload, handleDeleteNewImage, updateNewImage };
};