import { supabase } from "@/Supabase/supbaseClient"
import { Carousel } from "@/Types/carouselTypes"

// Función para trear las imagenes del carrusel en la base de dtaos de supabase
export const fetchCarousel = async () => {
    try {
        const { data, error } = await supabase
        .from("carousel_images")
        .select()

        if(error) console.error("Ha ocurrido un error al traer las imagenes del carrrusel")

        return data

    } catch (error) {
        console.log(error)
    }
}

// Función para actualizar la imagen y el link del carrusel en la base de datos de Supabase
export const upsertCarousel = async (carousel: Carousel[]): Promise<void> => {
    try {
        const updates = carousel.map(item => ({
            image: item.image,
            link: item.link,
        }));
        const { error } = await supabase
            .from("carousel_images")
            .upsert(updates, { onConflict: "id" });
            
        if (error) {
            console.error("Error al actualizar la imagen del carrusel:", error);
        } 

    } catch (error) {
        console.error("Error inesperado al actualizar la imagen del carrusel:", error);
    }
};