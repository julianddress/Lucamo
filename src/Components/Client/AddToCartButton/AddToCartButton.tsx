import { CheckCheck, CircleFadingPlus } from "lucide-react";

interface AddToCartButtonProps {
    isInCart: boolean;
    onClick: () => void;
}

export function AddToCartButton({ isInCart, onClick }: AddToCartButtonProps) {
    return (
        <button
            className={`h-8 w-max text-white rounded-lg backdrop-blur 
                ${isInCart ? "bg-green-700 cursor-not-allowed hover:bg-green-900 hover:text-green-200" 
                            : "bg-green-700 hover:bg-green-900 hover:text-green-200 cursor-pointer"}`}
            onClick={onClick}
            disabled={isInCart}
        >
            {isInCart ? (
                <div className="lg:flex items-center">
                    <span className="hidden lg:flex sm:text-xs lg:text-base mr-2">Añadido</span>
                    <CheckCheck size={20} />
                </div>
            ) : (
                <div className="lg:flex items-center">
                    <span className="hidden lg:flex sm:text-xs lg:text-base mr-2">Añadir</span>
                    <CircleFadingPlus size={20} />
                </div>
            )}
        </button>
    );
}
