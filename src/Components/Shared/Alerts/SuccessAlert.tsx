import { Alert, AlertDescription, AlertTitle } from "@/Components/Shared/UI/alert";
import { BadgeCheck } from "lucide-react";

interface SuccessAlertProps {
    title: string;
    description: string;
    className: string;
}

export function SuccessAlert({ title, description, className }: SuccessAlertProps) {

    return (
        
            <Alert variant="destructive" className={`bg-lime-500 ${className}`}>
                <BadgeCheck className="h-6 w-6 " />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{description}</AlertDescription>
            </Alert>
            
        
    );
}
