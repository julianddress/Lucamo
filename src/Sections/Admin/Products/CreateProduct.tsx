import { Button } from "@/Components/Shared/UI/button";
import { Card, CardContent } from "@/Components/Shared/UI/Card";
import { AddImages } from "@/Components/Admin/addImages/AddImages";
import { Form } from "@/Components/Admin/Form/Form";
import { Categories } from "@/Components/Admin/Categories/Categories";
import { SuccessAlert } from "@/Components/Shared/Alerts/SuccessAlert";
import { ErrorAlert } from "@/Components/Shared/Alerts/ErrorAlert";
import { InfoAlert } from "@/Components/Shared/Alerts/InfoAlert";
import { LoadingAlert } from "@/Components/Shared/Alerts/LoadingAlert";
import { useAlert } from "@/Context/AlertContext";
import { useCreateProduct } from "@/Hooks/Admin/useCreateProduct";
import { useState } from "react";

export function CreateProductSection() {

    const [images, setImages] = useState<string[]>([]);
    const { handleFormChange, handleCategoryChange, createProduct, loading } = useCreateProduct(images);

    const { successMessage, showLoadingAlert, errorMessage, loadingMessage, infoMessage, showErrorAlert, loadingAlertVisible, successAlertVisible, errorAlertVisible, infoAlertVisible  } = useAlert();

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createProduct();
            showLoadingAlert(loadingMessage)
        } catch (error) {

            console.log(error)
            if (error instanceof Error) {
                showErrorAlert(error.message || "Ha ocurrido un error al crear el producto");
            } else {
                showErrorAlert("Ha ocurrido un error al crear el producto");
            }
        }
    };

    return (
            <Card>
                <div className="fixed left-[70%] top-[5%] flex flex-col gap-2">
                    {loadingAlertVisible && (
                        <LoadingAlert
                            title="Cargando !"
                            description={loadingMessage || "Por favor espere"}
                            className=""
                        />
                    )}
                    {successAlertVisible && (
                        <SuccessAlert
                            title="Success!"
                            description={successMessage || "Producto creado con exito."}
                            className=""
                        />
                    )}
                    {errorAlertVisible && (
                        <ErrorAlert
                            title="Ocurrió un error!"
                            description={errorMessage || "Ups, algo salió mal."}
                            className=""
                        />
                    )}
                    {infoAlertVisible && (
                        <InfoAlert
                            title="Info Alert!"
                            description={infoMessage || "Head's up"}
                            className=""
                        />
                    )}
                </div>
                <CardContent className="pt-6">
                    <form className="space-y-6" onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <AddImages onImagesChange={setImages} />
                            <Form onChange={handleFormChange}>
                                <Categories onSelect={handleCategoryChange} />
                            </Form>
                        </div>
                        <div className="py-5">
                            <Button type="submit" className="w-full" disabled={loading}>
                                Crear Producto
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
    );
}