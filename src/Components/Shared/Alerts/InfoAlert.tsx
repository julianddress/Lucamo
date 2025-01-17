import { Alert, AlertDescription, AlertTitle } from "@/Components/Shared/UI/alert";
import { Info } from "lucide-react";

interface InfoAlertProps {
    title: string;
    description: string;
    className: string;
}

export function InfoAlert({ title, description, className }: InfoAlertProps) {

    return (
        
            <Alert variant="destructive" className={`bg-sky-500 ${className}`}>
                <Info className="h-6 w-6 text-white" />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{description}</AlertDescription>
            </Alert>
            
        
    );
}
