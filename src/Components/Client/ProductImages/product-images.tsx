import { useProduct } from "@/Context/productContext";
import useForm from "@/Hooks/Admin/useForm"
import { ProductImages } from "@/Types/productTypes";
import { useEffect, useState } from "react"

function ProductImage() {

    const [, , images] = useForm();
    const { selected } = useProduct();
    const [currentImage, setCurrentImage] = useState(0);
    const [productImages, setProductImages] = useState<string[]>([]);

    // Renderiza parar asignar las imagenes del producto seleccionado
    useEffect(() => {
        if (selected && images) {
            // Filtrar imágenes del producto actual basado en el id_product
            const currentProductImages = images.find(
                (img) => img.id_product === selected
            );

            if (currentProductImages) {
                const transformImages = (data: ProductImages) => {
                    return [
                        data.image_url_1,
                        data.image_url_2,
                        data.image_url_3,
                        data.image_url_4,
                    ].filter((url) => url !== null) as string[];
                };

                setProductImages(transformImages(currentProductImages));
            } else {
                setProductImages(["/placeholder.svg"]); // Imagen por defecto si no hay imágenes
            }
        }
    }, [selected, images]);

    return (
        <div className="flex flex-col items-center gap-1">
            <div className="relative lg:w-full lg:h-[60%] overflow-hidden rounded-lg">
                <img
                    src={productImages[currentImage] || "/placeholder.svg"}
                    alt="FAROLA DERECHA 18V JU FOR FUN"
                    className="w-full h-full object-fill transition-opacity duration-200 ease-out"
                />
            </div>
            <div className="grid grid-cols-4 gap-6">
                {productImages.map((src, index) => (
                    <button
                        key={index}
                        className={`aspect-square bg-gray-200 rounded-lg overflow-hidden ${
                            index === currentImage ? "ring-2 ring-primary" : "ring-1 ring-gray-500"
                        }`}
                        onClick={() => setCurrentImage(index)}
                    >
                        <img
                            src={productImages[index] || "/placeholder.svg"}
                            alt={`Product image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProductImage
