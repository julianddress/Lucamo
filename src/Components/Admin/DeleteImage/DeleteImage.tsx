import { Label } from "@/Components/Shared/UI/label"
import { Trash2 } from "lucide-react"

interface DeleteImageProps {
    imageUrl: string;
    onDelete: (imageUrl: string) => void;
}

export default function DeleteImage({imageUrl, onDelete }: DeleteImageProps) {

    const handleDelete = () =>{
        onDelete(imageUrl);
    } 

    return (

        <div 
            className="absolute w-full h-full hidden group-hover:flex group-hover:flex-col items-center backdrop-blur-xl place-content-center cursor-pointer" 
            onClick={handleDelete}
        >
            <Trash2 size={40} className="text-red-100  mb-2 hover:text-red-500" />
            <Label className="text-red-100">Eliminar</Label>
        </div>
    
    )
}
