// Hook para el contador del carrito

import { useState } from "react";

const useCartCounter = () => {
    const [count, setCount] = useState(0);

    const incrementCart = () => setCount(count + 1);

    return { count, incrementCart };
};

export {useCartCounter};
