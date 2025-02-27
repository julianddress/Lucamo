import { ImageLinkInput } from "@/Components/Admin/imageLinkInput/imageLinkInput";
import { ImageUploader } from "@/Components/Admin/imageUploader/imageUploader";
import { ErrorAlert } from "@/Components/Shared/Alerts/ErrorAlert";
import { InfoAlert } from "@/Components/Shared/Alerts/InfoAlert";
import { LoadingAlert } from "@/Components/Shared/Alerts/LoadingAlert";
import { SuccessAlert } from "@/Components/Shared/Alerts/SuccessAlert";
import { Button } from "@/Components/Shared/UI/button";
import { Card, CardContent } from "@/Components/Shared/UI/Card";
import { useAlert } from "@/Context/AlertContext";
import { useCreateCarouselSlide } from "@/Hooks/Admin/useCreateCarouselSlide";
import { useState } from "react";

export function CreateCarousel() {
    
    const [image, setImage] = useState<string>();
    const { handleInputChange, createSlide, loading } = useCreateCarouselSlide(image || "")
    const { successMessage, errorMessage, showSuccessAlert, showErrorAlert, showLoadingAlert, loadingMessage, infoMessage, loadingAlertVisible, successAlertVisible, errorAlertVisible, infoAlertVisible  } = useAlert();

    // Función para el envio del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            showLoadingAlert("Espere por favor")
            await createSlide();
            showSuccessAlert("Slide creado exitosamente en el carrusel!")
        } catch (error) {
            if (error instanceof Error) {
                showErrorAlert(error.message || "Ha ocurrido un error al crear el slide");
            } else {
                showErrorAlert("Ha ocurrido un error al crear el slide");
            }
        }
    }

    return (
            <Card>
                <div className="fixed right-[10%] top-[5%] flex flex-col gap-2 z-50">
                    {loadingAlertVisible && (
                        <LoadingAlert
                            title="Cargando !"
                            description={loadingMessage}
                            className=""
                        />
                    )}
                    {successAlertVisible && (
                        <SuccessAlert
                            title="Success!"
                            description={successMessage }
                            className=""
                        />
                    )}
                    {errorAlertVisible && (
                        <ErrorAlert
                            title="Ocurrió un error!"
                            description={errorMessage}
                            className=""
                        />
                    )}
                    {infoAlertVisible && (
                        <InfoAlert
                            title="Info Alert!"
                            description={infoMessage}
                            className=""
                        />
                    )}
                </div>
                <CardContent className="pt-6">
                    <form onSubmit={handleSubmit}>
                        <ImageUploader onImageChange={setImage} />
                        <ImageLinkInput onChange={handleInputChange} />
                        <div className="mt-5">
                            <Button 
                                type="submit" 
                                disabled={loading}
                                className="w-full"
                                >
                                Añadir al carrusel
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
    )
}