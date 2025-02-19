import ProductInfo from "@/Components/Client/ProductInfo/product-info";
import ProductImage from "@/Components/Client/ProductImages/product-images";
import { useNavigate } from "react-router-dom";
import { useProduct } from "@/Context/productContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useForm from "@/Hooks/Shared/useForm";
import ProductAvailability from "../ProductAvailability/ProductAvailability";

const ProductOverView = () =>{

    const {selectedProduct, products} = useProduct();
    const [inventory] = useForm();
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const { id: productId } = useParams();
    if (productId) selectedProduct(productId);
    const product = products.find((item) => item.id === productId)
    const quantity = inventory.find((inv) => inv.id_product === productId)
    
    return  <>

            <div className="container mx-auto flex justify-center md:my-5 lg:mt-8 lg:mb-20">

                <div className="rounded-lg lg:border-2 lg:border-gray-300 lg:border-solid">
                    <div className="flex text-[12px] sm:text-sm font-mono px-5 pt-2 sm:px-5 sm:py-4 items-center">
                        <span className="cursor-pointer hover:text-indigo-800 group flex items-center"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            onClick={() => navigate(-1)}
                        >
                            Productos {hovered ? <ChevronLeft /> : <ChevronRight />}
                        </span>
                            <span className="cursor-default">
                                {product?.name}
                            </span>
                    </div>

                    {productId ?
                        <>
                            <div className="flex flex-col justify-center items-center lg:flex-row mb-10">
                                <div className="flex flex-col md:flex-row gap-8 sm:gap-0 mb-5">
                                    <div className="h-[50%] p-5">
                                        <ProductImage />
                                    </div>
                                    <div className="md:rounded-lg bg-[#f2f3cc]">
                                        <ProductInfo />
                                    </div>
                                </div>
                                <ProductAvailability quantity={quantity?.quantity ?? 0} />
                            </div>
                        </> : <>
                            <p>No se ha seleccionado un producto</p>
                        </>    
                    }
                </div>
            </div>
        </>
}

export default ProductOverView;