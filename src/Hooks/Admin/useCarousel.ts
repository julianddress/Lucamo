import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/Supabase/supbaseClient";
import { useAlert } from "@/Context/AlertContext";
import { Carousel } from "@/Types/carouselTypes";
import { upsertCarousel } from "@/Services/carouselService";

const useCarousel = (): [
    Carousel[],
    boolean,
    () => Promise<void>,
    (carousel: Carousel[]) => void,
    () => Promise<void>,

] => {
    const { showErrorAlert } = useAlert();

    const [carousel, setCarousel] = useState<Carousel[]>([]);
    const [loading, setLoading] = useState(false);

    // Función fetch para traer la tabla carousel_images de Supabase
    const readCarousel = useCallback(async (event?: React.MouseEvent<HTMLButtonElement>) => {

        event?.preventDefault();
        setLoading(true);

        const { data, error: readProductError } = await supabase
            .from("carousel_images")
            .select();

        if (readProductError) showErrorAlert("Ocurrió un error al traer las imagenes del carrusel");
        
        setLoading(false);
        return data;

    }, [showErrorAlert]);

    useEffect(() => {
        const fetchCarousel = async () => {
            const fetchedCarousel = await readCarousel();
            if (fetchedCarousel) {
                setCarousel(fetchedCarousel);
            }
        };
        fetchCarousel();
    }, [readCarousel]);

    // Función para recargar los datos
    const reloadCarousel = async () => {
        setLoading(true);
        const fetchedCarousel = await readCarousel();
        if (fetchedCarousel) {
            setCarousel(fetchedCarousel);
        }
    };

    // Función para actualizar los productos utilizando el servicio externo
    const updateCarouselItem = async () => {
        await upsertCarousel(carousel);
    };

    return [
        carousel,
        loading,
        reloadCarousel,
        setCarousel,
        updateCarouselItem,
    ];
};

export default useCarousel;
