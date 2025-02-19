export const generateProductUrl = (product: { id: string; name: string }) => {
    if (!product) return "/producto"; 

    const slug = product.name
        .toLowerCase()
        .normalize("NFD") // Normaliza caracteres con tilde
        .replace(/[\u0300-\u036f]/g, "") // Elimina diacríticos (tildes)
        .replace(/[^\w\s-]/gi, '') // Elimina caracteres especiales
        .replace(/\s+/g, '-'); // Reemplaza espacios con guiones

    return `/co/producto/${slug}/dp/${product.id}`;
};  