import { useEffect, useState } from "react";
import { Carousel } from "@/Types/carouselTypes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedBackground from "@/Components/Shared/AnimatedBackground/AnimatedBackground";

interface CarouselBannerProps {
    carousel_images: Carousel[];
}

export function CarouselBanner({carousel_images}: CarouselBannerProps){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev + 1) % carousel_images.length);
        }
    };

    const prevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev - 1 + carousel_images.length) % carousel_images.length);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsTransitioning(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
            <div className="relative w-full lg:px-4 bg-[var(--background-color-banner)]">
                <AnimatedBackground />
                {/* Contenedor principal del carrusel */}
                <div className="container mx-auto relative h-[15rem] sm:h-[22rem] lg:h-[28rem] w-full sm:w-[40rem] lg:w-[50rem]">
                    
                    {/* Imágenes del carrusel */}
                    {carousel_images.map((image, index) => (
                        <div
                            key={image.id}
                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full transition-opacity duration-500 ease-in-out ${
                            index === currentIndex ? "opacity-100 z-9" : "opacity-0 z-0"
                            }`}
                        >
                            <a href={image.link} target="blank">
                                <img   
                                    src={image.image} 
                                    alt={image.image} 
                                    className="w-full h-auto lg:rounded-lg object-cover" 
                                />
                            </a>
                        </div>
                    ))}

                    {/* Botones de navegación */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full transition-all duration-300 text-white"
                        aria-label="Imagen anterior"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-all duration-300 text-white"
                        aria-label="Siguiente imagen"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>

                </div>
            </div>
    );
}

