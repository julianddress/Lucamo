import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);
    const [infoAlertVisible, setInfoAlertVisible] = useState(false);
    const [loadingAlertVisible, setLoadingAlertVisible] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [infoMessage, setInfoMessage] = useState('');

    // Función para mostrar la alerta de éxito
    const showSuccessAlert = (successMessage) => {

        // Ocultar alerta de carga si está activa
        setLoadingAlertVisible(false);
        setLoadingMessage('');

        setSuccessMessage(successMessage);
        setSuccessAlertVisible(true);
        setTimeout(() => setSuccessAlertVisible(false), 6000); // Ocultar alerta después de 6 segundos
    };

    // Función para mostrar la alerta de error
    const showErrorAlert = (errorMessage) => {

        // Ocultar alerta de carga si está activa
        setLoadingAlertVisible(false);
        setLoadingMessage('');
        
        setErrorMessage(errorMessage);
        setErrorAlertVisible(true);
        setTimeout(() => setErrorAlertVisible(false), 8000); // Ocultar alerta después de 8 segundos
    };

    // Función para mostrar la alerta de información
    const showInfoAlert = (infoMessage) => {

        setInfoMessage(infoMessage);
        setInfoAlertVisible(true);
        setTimeout(() => setInfoAlertVisible(false), 6000); // Ocultar alerta después de 8 segundos
    };

    // Función para mostrar la alerta de cargando
    const showLoadingAlert = (loadingMessage) => {

        setLoadingMessage(loadingMessage);
        setLoadingAlertVisible(true);
    };

    const value = {
        successAlertVisible, 
        errorAlertVisible,
        infoAlertVisible,
        loadingAlertVisible,
        showSuccessAlert, 
        showLoadingAlert,
        showErrorAlert, 
        showInfoAlert,
        successMessage,
        errorMessage,
        loadingMessage,
        infoMessage,
    }

    return (
        <AlertContext.Provider
            value={ value }
        >
            {children}
        </AlertContext.Provider>
    );
};

// Hook para usar el contexto
export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error("useAlert must be used within an AlertProvider");
    }
    return context;
};
