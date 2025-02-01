import { useState } from "react";
import { CircleX } from "lucide-react";
import { Form } from "@/Components/Admin/Form/Form";
import { Button } from "@/Components/Shared/UI/button";
import { Card, CardContent } from "@/Components/Shared/UI/Card";
import { ScrollArea } from "@/Components/Shared/UI/scroll-area";
import { AddImages } from "@/Components/Admin/addImages/AddImages";
import { Categories } from "@/Components/Admin/Categories/Categories";
import useEditProduct from "@/Hooks/Admin/useEditProduct";
import { ProductImages } from "@/Types/productTypes";
import useProducts from "@/Hooks/Admin/useProducts";
import { useAlert } from "@/Context/AlertContext";

interface EditProductProps {
    onClose: () => void;
    prod_images: ProductImages[];
    onChange: ( field: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement > ) => void;
    onSelect: (field: string, value: string) => void;
}

export function EditProduct({ onClose, prod_images, onChange, onSelect }: EditProductProps) {

    const [images, setImages] = useState<string[]>([]);
    const { EditProduct, loading } = useEditProduct(images)
    const [ , , , reloadProducts ] = useProducts();
    const { showSuccessAlert, showErrorAlert  } = useAlert();
    

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            await EditProduct();
            showSuccessAlert("Producto actualizado correctamente"); 
            onClose();
            reloadProducts();
        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                showErrorAlert("Se generó un codigo de error", error);
            } else {
                showErrorAlert("Ha ocurrido un error al actualizar el producto");
            }
        }
    };

    return (
            <ScrollArea className="w-[80%] h-svh">
                <Card className="relative m-4">
                    <CircleX size={35} className="absolute right-2 top-2 text-red-400 cursor-pointer rounded-xl hover:text-red-600" onClick={onClose}/>
                    <CardContent className="pt-6">
                        <form className="space-y-6" onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <AddImages onImagesEditChange={setImages} prod_images={prod_images}/>
                                <Form onChange={onChange}>
                                    <Categories onSelect={onSelect} />
                                </Form>
                            </div>
                            <div>
                                <Button type="submit" className="w-full" disabled={loading}>
                                    Actualizar Producto
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </ScrollArea>
    );
}