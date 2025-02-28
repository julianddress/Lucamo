import { CarouselBanner } from "@/Components/Client/Carousel/Carousel";
import useCarousel from "@/Hooks/Admin/useCarousel";

const CarouselSection = () => {

    const [carousel] = useCarousel();

    return  <>
                <section>
                    <CarouselBanner carousel_images={carousel}/>
                </section>
            </>
} 

export {CarouselSection};