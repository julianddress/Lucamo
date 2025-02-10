import { Card, CardContent } from "@/Components/Shared/UI/Card";
import { Minimize2 } from "lucide-react";

interface ProductCardDetailsProps {
    onCloseDetails: () => void;
}

function ProductCardDetails({onCloseDetails}: ProductCardDetailsProps) {
    return <>
    
        <Card className="fixed justify-items-center place-content-center top-0 left-0 w-full h-full rounded-none z-30 bg-black/80">
            <CardContent className="relative bg-slate-100 rounded-lg w-[80%] h-[80%] z-20" >
                <Minimize2  onClick={onCloseDetails} className="absolute right-4 top-3 cursor-pointer " />
                <div>

                </div>
            </CardContent>
        </Card>

    </>
}

export default ProductCardDetails