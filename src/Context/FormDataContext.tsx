import { createContext, useContext, useState } from "react";
import { formData } from "@/Types/productTypes";

interface FormDataContextType {
    FormData: formData;
    setFormData: (data: Partial<formData>) => void;
    resetFormData: () => void;
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

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

import { ReactNode } from "react";

export const FormDataProvider = ({ children }: { children: ReactNode }) => {

    const [FormData, setFormDataState] = useState<formData>(defaultFormData);

    const setFormData = (data: Partial<formData>) => {
        setFormDataState((prev) => ({ ...prev, ...data }));
    };

    const resetFormData = () => {
        setFormDataState(defaultFormData);
    };

    return (
        <FormDataContext.Provider value={{ FormData, setFormData, resetFormData }}>
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