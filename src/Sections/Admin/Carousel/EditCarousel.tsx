import { ImageLinkInput } from "@/Components/Admin/imageLinkInput/imageLinkInput";
import { ImageUploader } from "@/Components/Admin/imageUploader/imageUploader";
import { Button } from "@/Components/Shared/UI/button";
import { Card, CardContent } from "@/Components/Shared/UI/Card";
import { useAlert } from "@/Context/AlertContext";
import useEditCarousel from "@/Hooks/Admin/useEditCarousel";
import { Carousel } from "@/Types/carouselTypes";
import { X } from "lucide-react";
import { useState } from "react";

interface EditCarouselProps {
    onClose: () => void;
    onChange: ( field: string, event: React.ChangeEvent<HTMLInputElement> ) => void;
    carousel: Carousel[];
}

export function EditCarousel({onClose, carousel, onChange}: EditCarouselProps) {
    
    const [image, setImage] = useState<string | null>(null);
    const { EditCarousel, loading } = useEditCarousel(image || undefined)
    const { showErrorAlert, showLoadingAlert, showSuccessAlert } = useAlert();

    // Función para el envio del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            showLoadingAlert("Espere por favor")
            await EditCarousel();
            showSuccessAlert("Slide actualizado en el carrusel!")
        } catch (error) {
            if (error instanceof Error) {
                showErrorAlert(error.message || "Ha ocurrido un error al editar el slide");
            } else {
                showErrorAlert("Ha ocurrido un error al editar el slide");
            }
        }
    }

    return (
            <Card className="relative">
                <X size={20} className="absolute right-2 top-2 text-red-400 cursor-pointer rounded-xl hover:text-red-600" onClick={onClose}/>
                <CardContent className="pt-6">
                    <form onSubmit={handleSubmit}>
                        <ImageUploader onImageEditChange={setImage} carousel={carousel}/>
                        <ImageLinkInput onChange={onChange} />
                        <div className="mt-5">
                            <Button 
                                type="submit" 
                                disabled={loading}
                                className="w-full"
                                >
                                Actualizar item del carrusel
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
    )
}