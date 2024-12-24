import React, { useState } from "react";

interface LazyBannerImageProps {
  src: string; // Imagen principal
  alt: string; // Texto alternativo para SEO
  className?: string; // Estilos personalizados 
}

const LazyBannerImage: React.FC<LazyBannerImageProps> = ({
    src,
    alt,
    className,
}) => {

    const [isLoaded, setIsLoaded] = useState(false);

    return <>
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className={`lazy-image ${isLoaded ? "visible" : "hidden"} ${className || ""}`}
                    onLoad={() => setIsLoaded(true)}
                />
    </>
};

export {LazyBannerImage};
