export interface Product {
    id: string,
    description: string,
    reference: string,
    name: string,
    price: string,
    discount: string,
    featured: boolean,
}

export interface Inventory {
    id_product: string;
    reference: string;
    quantity: number;
}

export interface ProductCategory  {
    id_product: string,
    reference: string,
    category: string,
    sub_category: string,
}

export interface ProductImages {
    id_product: string,
    image_url_1: string,
    image_url_2: string,
    image_url_3: string,
    image_url_4: string,

}

export type formData = Product & Inventory & ProductCategory
