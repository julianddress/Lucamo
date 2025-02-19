import { useState, useEffect } from "react";
import { fetchInventory, fetchCategory, fetchImages } from "@/Services/productService";
import { Inventory, ProductCategory, ProductImages } from "@/Types/productTypes";

const useForm = (): [
    inventory: Inventory[],
    prod_category: ProductCategory[],
    product_images: ProductImages[]
] => {
    const [inventory, setInventory] = useState<Inventory[]>([]);
    const [category, setCategory] = useState<ProductCategory[]>([]);
    const [images, setImages] = useState<ProductImages[]>([]);

    // Fetch inventory data
    useEffect(() => {
        const handleInventory = async () => {
        const result = await fetchInventory();
        if (result) {
            setInventory(result);
        }
        };
        handleInventory();
    }, []);

    // Fetch product category data
    useEffect(() => {
        const handleCategory = async () => {
        const result = await fetchCategory();
        if (result) {
            setCategory(result);
        }
        };
        handleCategory();
    }, []);

    // Fetch product images data
    useEffect(() => {
        const handleImages = async () => {
        const result = await fetchImages();
        if (result) {
            setImages(result);
        }
        };
        handleImages();
    }, []);

    return [inventory, category, images];
};

export default useForm;
