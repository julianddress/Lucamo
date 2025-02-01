import { useState } from "react";
import { Product } from "@/Types/productTypes";
import { supabase } from "@/Supabase/supbaseClient";
import { useFormData } from "@/Context/FormDataContext";
import { Inventory, ProductImages, ProductCategory } from "@/Types/productTypes";

const useEditProduct = (images?: string[]) => {
    
    const [ stringImages, setStringImages ] = useState<string[]>([]);
    const [ isEditing, setIsEditing ] = useState(false); 
    const { FormData, setFormData, resetFormData } = useFormData();
    const [ loading, setLoading ] = useState(false); 

    // Toogle para el abrir el modo edición
    const startEditing = ( product: Product, inventory: Inventory, category: ProductCategory) => {
        
        setIsEditing(true)
        setFormData({
            id: product.id,
            reference: product.reference,
            name: product.name,
            price: product.price,
            discount: product.discount,
            description: product.description,
            category: category.category,
            sub_category: category.sub_category,
            quantity: inventory.quantity,
            featured: product.featured,
        })

    };

    const assignImages = (product: Product, images: ProductImages[]) => {

        setLoading(true);

        // Filtrar imágenes del producto actual basado en el id_product
        const currentProductImages = images?.find(
            (img) => img.id_product === product.id
        );
        
        if(currentProductImages){
            const transformImages = (data: ProductImages) => {
                    
                // Crea un array con las URLs de las imágenes, ignorando las que son null
                const imageUrls = [data.image_url_1, data.image_url_2, data.image_url_3, data.image_url_4]
                    .filter((url) => url !== null) // Filtra las URLs null
                    .map((url) => url as string); // Asegura que las URLs sean de tipo string
                
                return imageUrls;
            };
        
            // Enviar los strings de las imagenes a useImageUpdate y AddImages
            const transformedImages = transformImages(currentProductImages);
            setStringImages(transformedImages)
            setLoading(false);

            return transformedImages
        }
    }

    // Toogle para cerrar el modo edición
    const stopEditing = () => {
        resetFormData()
        setIsEditing(false); 
    };

    // Función para manejar los cambios en el formulario del producto
    const handleFormChange = ( field: string, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement > ) => {
        setFormData({[field]: event.target.value});
    }

    // Función para manejar los cambios en el formulario del producto
    const handleCategoryChange = ( field: string, value: string ) => {
        setFormData({[field]: value});
    }

    // Función para actualizar la tabla products del Id seleccionado
    const updateProductData = async () => {

        console.log("Formdata es: ", FormData)
        const { data: product, error: productError } = await supabase
            .from("products")
            .update([{ 
                reference: FormData.reference, 
                name: FormData.name, 
                price: FormData.price, 
                discount: FormData.discount, 
                description: FormData.description 
            }])
            .eq("id", FormData.id)
            .select()

        if (productError) {
            console.error("Error actualizando el producto");
            throw productError;
        }

        console.log("Producto actualizado: ", product);

        return product;
    };

    // Función para insertar los datos en la tabla 'inventory'
    const updateInventoryData = async () => {

        const { quantity } = FormData;
        const { error: inventoryError } = await supabase
            .from("inventory")
            .update({ quantity })
            .eq("id_product", FormData.id);

        if (inventoryError) {
            console.error("Error actualizando la cantidad");
            throw inventoryError;
        }
    };

    // Función para insertar los datos en la tabla 'product_category'
    const updateProductCategoryData = async () => {

        const { error: productCategoryError } = await supabase
            .from("product_category")
            .update({ 
                reference: FormData.reference,
                category: FormData.category, 
                sub_category: FormData.sub_category, 
            })
            .eq("id_product", FormData.id);

        if (productCategoryError) {

            console.error("Error actualizando las categorías del producto");
            throw productCategoryError;
        }
    };

    // Función para actualizar las imágenes del producto
    const updateImages = async () => {

        if(!images) return

        // Objeto con las imágenes cada columna en supabase
        const imageColumns = {
            id_product: FormData.id,
            image_url_1: images[0] || null,
            image_url_2: images[1] || null,
            image_url_3: images[2] || null,
            image_url_4: images[3] || null,
        };

        // updatear en la tabla 'product_images'
        const { error: imagesError } = await supabase
            .from("product_images")
            .update([imageColumns])
            .eq('id_product', FormData.id);

        if (imagesError) {
            console.log("Error al subir imágenes: ", imagesError);
            throw imagesError;
        }
    };

    // Función para asignar el producto a eliminar
    const startDeleting = (product?: Product) => {
        setFormData({id: product?.id});
    }

    // Función para eliminar el producto seleccionado
    const handleDelete = async () => {
        const response = await supabase
            .from('products')
            .delete()
            .eq('id', FormData.id)

        if(response.error){
            console.error("Error eliminando el producto");
            throw response.error;
        } else {
            console.log("Producto eliminado exitosamente");
        }
    }

    // Función para editar el producto seleccionado y tablas relacionadas
    const EditProduct = async () => {

        setLoading(true);

        try {

            if(FormData){
                
                await updateProductData();
                await updateInventoryData();
                await updateProductCategoryData();
                await updateImages();

                console.info("Producto actualizado exitosamente!");
            } else {
                console.log("El producto no existe");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        handleCategoryChange,
        handleFormChange,
        setFormData,
        isEditing,
        loading,
        stringImages,
        assignImages,
        handleDelete,
        startDeleting,
        setStringImages,
        startEditing,
        stopEditing,
        EditProduct,
    };
};

export default useEditProduct;