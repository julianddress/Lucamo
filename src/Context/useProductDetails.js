// Hook para mostrar/ocultar detalles del producto

import { useState } from "react";

const useProductDetails = () => {
    const [showDetails, setShowDetails] = useState(false);

    const openDetails = () => setShowDetails(true);
    const closeDetails = () => setShowDetails(false);

    return { showDetails, openDetails, closeDetails };
};

export {useProductDetails};
