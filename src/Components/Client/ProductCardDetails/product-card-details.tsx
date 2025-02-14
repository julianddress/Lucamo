import { Card, CardContent } from "@/Components/Shared/UI/Card";
import { Minimize2 } from "lucide-react";
import ProductImage from "../ProductImages/product-images";
import ProductInfo from "../ProductInfo/product-info";

interface ProductCardDetailsProps {
    onCloseDetails: () => void;
}

function ProductCardDetails({onCloseDetails}: ProductCardDetailsProps) {
    return <>
    
        <Card className="hidden lg:block fixed top-0 left-0 w-full h-full rounded-none z-30 bg-black/80">
            <div className=" h-full w-full flex justify-center">
                <CardContent className="bg-slate-100 relative rounded-lg w-[60%] h-[60%] p-0 lg:top-[10%]" >
                    <Minimize2  onClick={onCloseDetails} className="absolute right-4 top-3 cursor-pointer " />
                    <div className="lg:grid lg:grid-cols-2 gap-4 bg-white rounded-xl">
                        <div className="h-full p-10">
                            <ProductImage />
                        </div>
                        <div className="h-full rounded-l-[40px] bg-[#f2f3cc]">
                            <ProductInfo />
                        </div>
                    </div>
                </CardContent>
            </div>
        </Card>

    </>
}

export default ProductCardDetails