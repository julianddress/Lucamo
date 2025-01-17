import { Plus } from "lucide-react";
import { Input } from "@/Components/Shared/UI/input";
import { Label } from "@/Components/Shared/UI/label";
import { useImageUpload } from "@/Hooks/Admin/useImageUpload";
import DeleteImage from "../DeleteImage/DeleteImage";

interface AddImagesProps {
    onImagesChange: (images: string[]) => void;
}

export function AddImages({ onImagesChange }: AddImagesProps) {

    const { images, uploading, handleImageUpload, handleDeleteImage } = useImageUpload(onImagesChange);

    return (
        <div className="space-y-2">
        <Label htmlFor="images">Imagenes del producto ( Max 4 )</Label>
        <div className="grid grid-cols-2 gap-4">
            {Array(4)
            .fill(0)
            .map((_, i) => (
                <div
                key={i}
                className="aspect-square relative border rounded-lg overflow-hidden"
                >
                {images[i] ? (
                    <div className="flex group">
                    <img
                        src={images[i]}
                        alt={`Product image ${i + 1}`}
                        className="object-cover w-full h-full"
                    />
                    <DeleteImage
                        imageUrl={images[i]}
                        onDelete={handleDeleteImage}
                    />
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                    </div>
                )}
                </div>
            ))}
        </div>
        <Input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="mt-2"
            disabled={uploading}
        />
        </div>
    );
}
