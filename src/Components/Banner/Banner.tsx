import React, { useState, useEffect } from "react";
import "./Banner.css";
import "../../assets/css/base.css"
import NextSlide from '../../assets/img/nextSlide.svg';
import PreviousSlide from "../../assets/img/previouSlide.svg";
import {LazyBannerImage} from "./LazyBannerImage.tsx";

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

    return  <>  

                <div className="carousel-container">
                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {items.map((item, index) => (
                        
                        <div key={index} className="carousel-slide">
                            <a href={item.link} 
                                rel="noreferrer" 
                                target="_blank" 
                                className="carousel__card"
                            >
                            <LazyBannerImage 
                                src={item.image}
                                alt={item.title}
                                className="carousel__card-img"
                            />            
                                <div className="carousel-content phudu-bold">
                                    <h2>{item.title}</h2>
                                    <h3>{item.subtitle}</h3>
                                </div>
                            </a>
                        </div>
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="carousel-arrow left"
                        disabled={isTransitioning}
                    >
                        <img src={PreviousSlide} alt="Arrow" className="carousel__arrow-img" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="carousel-arrow right"
                        disabled={isTransitioning}
                    >
                        <img src={NextSlide} alt="Arrow" className="carousel__arrow-img" />
                    </button>

                    <div className="carousel-dots">
                        {items.map((_, index) => (
                        <button
                            key={index}
                            aria-label="Go to slide"
                            onClick={() => setCurrentIndex(index)}
                            className={`carousel-dot ${
                            currentIndex === index ? "active" : ""
                            }`}
                        />
                        ))}
                    </div>
                </div>

                <div className="banner__stylegradient"/> {/* EFECTO EN DIAGONAL AL FINAL DEL BANNER */}
                
            </>
}

