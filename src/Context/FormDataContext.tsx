import { createContext, useContext, useState } from "react";
import { formData } from "@/Types/productTypes";

interface FormDataContextType {
    FormData: formData;
    setFormData: (data: Partial<formData>) => void;
    resetFormData: () => void;
    carouselData: Carousel;
    setCarouselData: (data: Partial<Carousel>) => void;
    resetCarouselData: () => void;
}

const defaultFormData: formData = {
    id: "",
    description: "",
    reference: "",
    name: "",
    price: "",
    discount: "",
    featured: false,
    id_product: "",
    quantity: 0,
    category: "",
    sub_category: "",
};

const carouselFormData: Carousel = {
    id: 0,
    image: "",
    link: "",
}

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

import { ReactNode } from "react";
import { Carousel } from "@/Types/carouselTypes";

export const FormDataProvider = ({ children }: { children: ReactNode }) => {

    const [FormData, setFormDataState] = useState<formData>(defaultFormData);
    const [carouselData, setCarouselDataState] = useState<Carousel>(carouselFormData);

    const setFormData = (data: Partial<formData>) => {
        setFormDataState((prev) => ({ ...prev, ...data }));
    };

    const resetFormData = () => {
        setFormDataState(defaultFormData);
    };

    const setCarouselData = (data: Partial<Carousel>) => {
        setCarouselDataState((prev) => ({ ...prev, ...data }));
    }

    const resetCarouselData = () => {
        setCarouselDataState(carouselFormData);
    };

    return (
        <FormDataContext.Provider value={{ FormData, setFormData, resetFormData, carouselData, setCarouselData, resetCarouselData }}>
            {children}
        </FormDataContext.Provider>
    );
};

export const useFormData = () => {
    const context = useContext(FormDataContext);
    if (!context) {
        throw new Error("useFormData debe usarse dentro de FormDataProvider");
    }
    return context;
};