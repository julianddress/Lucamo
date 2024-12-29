import { useState, useEffect } from "react";
import "../../assets/css/base.css"
import NextSlide from "../../assets/img/nextSlide.svg";
import PreviouSlide from "../../assets/img/previouSlide.svg";

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
            <div className="relative w-full h-[15rem] sm:h-[24rem] lg:h-[32rem] overflow-hidden bg-[var(--background-color-banner)] ">
            
                <div
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-full h-full"
                    >
                        <div className="w-full pt-6 leading-7">
                            <h2 className="text-[1.5rem] md:text-[2.5rem] text-center text-[aliceblue] luckiestguy">
                            {item.title}
                            </h2>
                            <h3 className="text-[1rem] text-center text-[aliceblue]/70">
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
                                    className="absolute max-w-full max-h-[400px] object-cover opacity-100 pt-3 pb-8 transition-all duration-300 ease-in-out"
                                />
                            </a>
                        </div>
                    </div>
                    ))}

                </div>
            
                <button
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    className="absolute left-[1%] top-[10%] sm:top-[45%] rounded-[20%] outline-none transition-colors 
                            duration-200 disabled:cursor-not-allowed disabled:opacity-50 hover:enabled:bg-[rgb(176,206,212)]"
                >
                    <div className="w-10 sm:w-12 md:w-15 lg:w-20 text-white" >
                        <img src={PreviouSlide} alt="Previous Slide" />
                    </div>
                </button>
            
                <button
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    className="absolute right-[1%] top-[10%] sm:top-[45%] rounded-[20%] outline-none transition-colors 
                            duration-200 disabled:cursor-not-allowed disabled:opacity-50 hover:enabled:bg-[rgb(176,206,212)]"
                >
                    <div className="w-10 sm:w-12 md:w-15 lg:w-20 text-white" >
                        <img src={NextSlide} alt="Next Slide" />
                    </div>
                </button>
        
            </div>
    );
}

