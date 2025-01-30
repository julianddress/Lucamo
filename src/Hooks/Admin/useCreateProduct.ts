import { useState } from "react";
import { useAlert } from "@/Context/AlertContext";
import { supabase } from "@/Supabase/supbaseClient";
import { useFormData } from "@/Context/FormDataContext";

export function useCreateProduct(images: string[]) {

    // Estado para el manejo de alertas
    const { showErrorAlert, showSuccessAlert } = useAlert();

    // Estado para la carga 
    const [loading, setLoading] = useState(false);

    // Obtener y establecer los datos del formulario ( Context )
    const { FormData, setFormData } = useFormData();

    // Función para manejar los cambios en el formulario del producto
    const handleFormChange = ( field: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement > ) => {
        setFormData({[field]: event.target.value});
    }

    // Función para manejar los cambios en las categorias del producto
    const handleCategoryChange = (category: string, subCategory: string) => {
        setFormData({category, sub_category: subCategory});
    };

    // Función para insertar los datos del producto
    const insertProductData = async () => {

        const { data: product, error: productError } = await supabase
            .from("products")
            .insert([{ 
                reference: FormData.reference, 
                name: FormData.name, 
                price: FormData.price, 
                discount: FormData.discount, 
                description: FormData.description 
            }])
            .select("id")
            .single();

        if (productError) {
            showErrorAlert("Error creando el producto");
            throw productError;
        }

        return product;
    };

    // Función para insertar los datos en la tabla 'inventory'
    const insertInventoryData = async (productId: string) => {

        const { error: inventoryError } = await supabase
            .from("inventory")
            .insert([{ 
                id_product: productId, 
                quantity: FormData.quantity, 
                reference: FormData.reference 
            }]);

        if (inventoryError) {
            showErrorAlert("Error creando la cantidad");
            throw inventoryError;
        }
    };

    // Función para insertar los datos en la tabla 'product_category'
    const insertProductCategoryData = async (productId: string) => {

        const { error: productCategoryError } = await supabase
            .from("product_category")
            .insert([{ 
                id_product: productId, 
                category: FormData.category, 
                reference: FormData.reference,
                sub_category: FormData.sub_category, 
            }]);

        if (productCategoryError) {
            showErrorAlert("Error asociando la categoría del producto");
            throw productCategoryError;
        }
    };

    // Función para insertar las imágenes del producto
    const insertImages = async (productId: string) => {

        // Objeto con las imágenes cada columna en supabase
        const imageColumns = {
            id_product: productId,
            image_url_1: images[0] || null,
            image_url_2: images[1] || null,
            image_url_3: images[2] || null,
            image_url_4: images[3] || null,
        };

        // Insertar en la tabla 'product_images'
        const { error: imagesError } = await supabase
            .from("product_images")
            .insert([imageColumns]);

        if (imagesError) {
            showErrorAlert("Error al subir imágenes");
            throw imagesError;
        }
    };

    // Función para crear un nuevo producto
    const createProduct = async () => {
    
        setLoading(true);

        // Simular la propiedad required para las categorias
        if ( !FormData.category || !FormData.sub_category ) {
            showErrorAlert("No ha seleccionado una categoría o subcategoría");
            setLoading(false);
            return;
        }

        try {

            // Insertar los datos del producto
            const product = await insertProductData();

            // Verificar si la inserción del producto fue exitosa (si product existe)
            if (product && product.id) {

                await insertInventoryData(product.id);
                await insertProductCategoryData(product.id);
                await insertImages(product.id);

                showSuccessAlert("Producto creado Exitosamente !");

            } else {
                showErrorAlert("Error creando el producto");
            }

        } catch (error) {

            console.log('el error es: ', error)
            
            // Verifica y extrae el mensaje del error, usando type assertion en caso de que sea un objeto con 'message'
            const errorMessage = (error instanceof Error || (typeof error === "object" && error !== null)) 
                ? (error as { message: string }).message 
                : "Ha ocurrido un error inesperado";

            // Manejo de errores
            if (errorMessage.includes("duplicate key")) {
                showErrorAlert("La referencia ingresada ya existe");
            } else {
                showErrorAlert(errorMessage);
            }

        } finally {
            setLoading(false);
    }
};

    return { FormData, handleFormChange, handleCategoryChange, createProduct, loading };
}
