import { useState } from "react";
import { supabase } from "@/Supabase/supbaseClient";
import { useFormData } from "@/Context/FormDataContext";
import { Carousel } from "@/Types/carouselTypes";

const useEditCarousel = (image?: string) => {
    
    const [ stringImage, setStringImage ] = useState<string | null>(null);
    const [ isEditing, setIsEditing ] = useState(false); 
    const { carouselData, setCarouselData, resetCarouselData } = useFormData();
    const [ loading, setLoading ] = useState(false); 

    // Toogle para abrir el modo edición
    const startEditing = ( carousel: Carousel) => {
        
        setIsEditing(true)
        setCarouselData({
            id: carousel.id,
            image: carousel.image,
            link: carousel.link,
        })

    };

    // Toogle para cerrar el modo edición
    const stopEditing = () => {
        resetCarouselData()
        setIsEditing(false); 
    };

    const assignImage = (carouselData: Carousel, carousel: Carousel[]) => {

        setLoading(true);

        const item = carousel.find((item) => item.id === carouselData.id)

        if(item){
            setStringImage(item.image)
            setLoading(false);
            
            return item.image
        }        
    }

    // Función para manejar los cambios en el formulario de carrusel
    const handleInputChange = ( field: string, event: React.ChangeEvent<HTMLInputElement > ) => {
        setCarouselData({[field]: event.target.value});
    }

    // Función para actualizar el slide del carrusel seleccionado
    const updateCarouselItem = async () => {

        if(!image) return

        // updatear en la tabla 'carousel_images'
        const { error: imageError } = await supabase
            .from("carousel_images")
            .update({image: image, link: carouselData.link})
            .eq('id', carouselData.id);

        if (imageError) {
            console.log("Error al actualizar la imágen o el link: ", imageError);
            throw imageError;
        }
    };

    // Función para asignar el slide a eliminar
    const startDeleting = (carousel?: Carousel) => {
        setCarouselData({id: carousel?.id});
    }

    // Función para eliminar la imagen del slide seleccionado
    const handleImageDelete = async (image: string) => {

        const { error: deleteError } = await supabase.storage.from("carousel-images").remove([image]);

        if (deleteError) {
            const errorMessage = deleteError instanceof Error || (typeof deleteError === "object" && deleteError !== null)
                ? (deleteError as { message: string }).message
                : "Ha ocurrido un error inesperado";
            console.error(errorMessage)
        }
    }

    // Función para eliminar el slide seleccionado
    const handleDelete = async () => {

        const response = await supabase
            .from('carousel_images')
            .delete()
            .eq('id', carouselData.id)

        if(response.error){
            console.error("Error eliminando el slide del carrusel");
            throw response.error;
        } else {
            console.log("Slide eliminado exitosamente");
        }
    }

    // Función para editar el slide seleccionado y tablas relacionadas
    const EditCarousel = async () => {

        setLoading(true);

        try {

            if(carouselData){

                await updateCarouselItem();

            } else {
                console.log("El slide no existe");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        handleInputChange,
        handleImageDelete,
        setCarouselData,
        isEditing,
        loading,
        stringImage,
        assignImage,
        handleDelete,
        startDeleting,
        setStringImage,
        startEditing,
        stopEditing,
        EditCarousel,
    };
};

export default useEditCarousel;