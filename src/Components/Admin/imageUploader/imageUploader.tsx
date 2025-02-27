import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload } from "lucide-react"
import DeleteImage from "../DeleteImage/DeleteImage"
import { useCarouselImageUpload } from "@/Hooks/Admin/useCarouselImageUpload"

interface ImageUploaderProps {
    onImageChange: (img: string) => void
}

export function ImageUploader({ onImageChange }: ImageUploaderProps) {

    const { image, uploading, handleImageUpload, handleDeleteImage } = useCarouselImageUpload(onImageChange);

    // Función para manejar la subida de imagen al cambiar el input
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            await handleImageUpload(file);
        }
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            handleImageUpload(acceptedFiles[0]);
        }
    }, [handleImageUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        multiple: false,
        disabled: uploading,
    });

    return (
        <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                isDragActive ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary"
            }`}
        >
            <input {...getInputProps()} onChange={handleFileChange} />
            {image ? (
                <div className="relative overflow-hidden">
                    <div className="flex group">
                        <img src={image} alt="Preview" className="mx-auto max-h-48 object-contain" />
                        <DeleteImage imageUrl={image} onDelete={handleDeleteImage} />
                    </div>
                </div>
            ) : (
                <div className="space-y-2">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="text-sm text-gray-600">Arrastra o suelta una imagen acá, o haz click para seleccionar una imagen</p>
                </div>
            )}
        </div>
    );
}
