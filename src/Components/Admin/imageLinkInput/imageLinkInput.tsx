import { Link } from "lucide-react"
import { Input } from "@/Components/Shared/UI/input"
import { Label } from "@/Components/Shared/UI/label"
import { useFormData } from "@/Context/FormDataContext";

interface ImageLinkInputProps {
    onChange: ( field: string, event: React.ChangeEvent<HTMLInputElement > ) => void;
}

export function ImageLinkInput({ onChange }: ImageLinkInputProps) {

    const { carouselData } = useFormData();
    
    return (
        <div className="space-y-4 mt-4">
            <Label htmlFor="link" className="font-semibold">
                Link de la imagen ( opcional )
            </Label>
            <div className="flex items-center space-x-2">
                <Link className="h-5 w-5 text-gray-400" />
                <Input
                    id="imageLink"
                    type="url"
                    placeholder="https://lucamo.com/productos/farola-hella-12v/178-872-45"
                    value={carouselData?.link}
                    onChange={(e) => onChange("link", e)}
                    className="flex-1"
                />
            </div>
        </div>
    )
}

