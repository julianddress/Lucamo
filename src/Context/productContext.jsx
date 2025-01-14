// ProductContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchProducts } from '@/Services/productService';

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Función para cargar los productos
    const loadProducts = async () => {
        try {
            setLoading(true);
            const productsData = await fetchProducts(); 
            setProducts(productsData.results); 
        } catch (err) {
            setError('Error al obtener los productos: ' + (err.message || 'Desconocido'));
        } finally {
            setLoading(false);
        }
    };

    // Cargar productos al montar el componente
    useEffect(() => {
        loadProducts(); 
    }, []);

    // Variables del contexto
    const value = {
        products,
        loading,
        error,
        loadProducts, 
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};


// Inicio.js
// import { useEffect } from 'react';
// import { useProduct } from '@/Context/productContext'; // Importamos el contexto
// import { ProductCard } from './ProductCard'; // Asegúrate de importar ProductCard

// const functionName = () => {
//     const { products, loading, error, loadProducts } = useProduct(); // Usamos el contexto

//     useEffect(() => {
//         loadProducts(); // Si no cargaste los productos automáticamente en el contexto, lo haces aquí
//     }, [loadProducts]);

//     return (
//         <div>
//             <h1>Productos</h1>
//             {loading && <p>Cargando productos...</p>}
//             {error && <p className="text-red-500">{error}</p>}
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {products.length > 0 ? (
//                     products.map((product) => (
//                         <ProductCard 
//                             key={product.id} 
//                             title={product.name} 
//                             price={product.prices[0]?.price_list[0]?.value || 0} // Usamos el precio del producto
//                             imageUrl={product.imageUrl || ''} // Si no hay imagen, pasa vacío o usa un avatar como fallback en ProductCard
//                             discount="50% OFF" // Descuento por defecto, lo puedes cambiar más tarde
//                         />
//                     ))
//                 ) : (
//                     <p>No se encontraron productos.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default functionName;
