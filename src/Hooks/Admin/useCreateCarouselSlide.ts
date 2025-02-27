import { useState } from "react";
import { useAlert } from "@/Context/AlertContext";
import { supabase } from "@/Supabase/supbaseClient";
import { useFormData } from "@/Context/FormDataContext";

export function useCreateCarouselSlide(image: string) {

    // Estado para el manejo de alertas
    const { showErrorAlert } = useAlert();

    // Estado para la carga 
    const [loading, setLoading] = useState(false);

    // Estado del Input ( Link )
    const { carouselData, setCarouselData } = useFormData();

    // Función para manejar los cambios en el formulario de carrusel
    const handleInputChange = ( field: string, event: React.ChangeEvent<HTMLInputElement > ) => {
        setCarouselData({[field]: event.target.value});
    }

    // Función para insertar la imágen y link del carrusel
    const insertCarousel = async () => {

        // Insertar en la tabla 'carousel_images'
        const { error: imagesError } = await supabase
            .from("carousel_images")
            .insert([{
                image: image,
                link: carouselData.link
            }]);

        if (imagesError) {
            showErrorAlert("Error al subir la imagen al carrusel");
            throw imagesError;
        }
    };

    // Función para crear un nuevo producto
    const createSlide = async () => {
    
        setLoading(true);

        try {
            
            await insertCarousel();
            setCarouselData({link: ""})

        } catch (error) {

            console.log('el error es: ', error)
            
            // Verifica y extrae el mensaje del error, usando type assertion en caso de que sea un objeto con 'message'
            const errorMessage = (error instanceof Error || (typeof error === "object" && error !== null)) 
                ? (error as { message: string }).message 
                : "Ha ocurrido un error inesperado";

            // Manejo de errores
            if (errorMessage.includes("duplicate key")) {
                showErrorAlert("La referencia ingresada ya existe");
            } else {
                showErrorAlert(errorMessage);
            }

        } finally {
            setLoading(false);
    }
};

    return { handleInputChange, createSlide, loading };
}
