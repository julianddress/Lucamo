import { useState, useEffect } from "react";
import "../../assets/css/base.css"
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
    image: string;
    title: string;
    subtitle: string;
    link: string,
}

interface CarouselProps {
    items: CarouselItem[];
}

export function Banner({items}: CarouselProps){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % items.length);
        }
    };

    const prevSlide = () => {
        if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsTransitioning(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
            <div className="relative w-full h-[18rem] sm:h-[27rem] lg:h-[32rem] overflow-hidden bg-[var(--background-color-banner)]">
            
                <div
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-full h-full"
                    >
                        <div className="w-full pt-6 phudu-bold">
                            <h2 className="text-[2rem] text-center text-[aliceblue]">
                            {item.title}
                            </h2>
                            <h3 className="text-[0.8rem] text-center text-[aliceblue]/70">
                            {item.subtitle}
                            </h3>
                        </div>
                        <div className="w-full h-full">
                            <a
                            href={item.link}
                            rel="noreferrer"
                            target="_blank"
                            className="flex justify-center"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute max-w-full max-h-[350px] object-cover opacity-100 pt-5 pb-8 transition-all duration-300 ease-in-out"
                                />
                            </a>
                        </div>
                    </div>
                    ))}

                </div>
            
                <button
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    className="absolute left-[1%] top-[5%] sm:top-[40%] rounded-[20%] outline-none transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 hover:enabled:bg-[rgb(176,206,212)]"
                >
                    <ChevronLeft className="w-[4rem] h-[auto] text-white" />
                </button>
            
                <button
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    className="absolute right-[1%] top-[5%] sm:top-[40%] rounded-[20%] outline-none transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 hover:enabled:bg-[rgb(176,206,212)]"
                >
                    <ChevronRight className="w-[4rem] h-[auto] text-white" />
                </button>

                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex gap-4">
                    {items.map((_, index) => (
                    <button
                        key={index}
                        aria-label="Go to slide"
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out
                        ${currentIndex === index 
                            ? "bg-white scale-120" 
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                    />
                    ))}
                </div>
        
            </div>
    );
}

