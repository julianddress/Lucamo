import { useState } from "react";
import { supabase } from "@/Supabase/supbaseClient";
import { useAlert } from "@/Context/AlertContext";
import { v4 as uuidv4 } from "uuid";

export const useCarouselImageUpload = (onImageChange: (image: string) => void) => {

    const [image, setImage] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const { showSuccessAlert, showErrorAlert, showInfoAlert, showLoadingAlert } = useAlert();

    const handleImageUpload = async (file: File, event?: React.ChangeEvent<HTMLInputElement>) => {

        event?.preventDefault();
        if (!file) return;

        setUploading(true);
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
            setUploading(false);
            return;
        }

        const { data: publicUrlData } = supabase.storage.from("carousel-images").getPublicUrl(filePath);
        const uploadedImageUrl = publicUrlData.publicUrl;

        setImage(uploadedImageUrl);
        onImageChange(uploadedImageUrl);
        showSuccessAlert("La imagen ha sido guardada exitosamente");
        setUploading(false);
    };

    const handleDeleteImage = async () => {
        if (!image) return;

        const filePath = `${image.split("/").pop()}`;
        const { error: deleteError } = await supabase.storage.from("carousel-images").remove([filePath]);

        if (deleteError) {
            const errorMessage = deleteError instanceof Error || (typeof deleteError === "object" && deleteError !== null)
                ? (deleteError as { message: string }).message
                : "Ha ocurrido un error inesperado";
            showErrorAlert(errorMessage);
            return;
        }

        setImage(null);
        onImageChange("");
        showSuccessAlert("La Imagen ha sido eliminada con éxito");
    };

    return { image, uploading, handleImageUpload, handleDeleteImage };
};