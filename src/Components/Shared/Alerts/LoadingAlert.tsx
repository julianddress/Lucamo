import { Alert, AlertDescription, AlertTitle } from "@/Components/Shared/UI/alert";
import { Loader } from "lucide-react";

interface LoadingAlertProps {
    title: string;
    description: string;
    className: string;
}

export function LoadingAlert({ title, description, className }: LoadingAlertProps) {

    return (
        
            <Alert variant="destructive" className={`bg-orange-400 ${className}`}>
                <Loader className="h-6 w-6" />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{description}</AlertDescription>
            </Alert>
            
        
    );
}
