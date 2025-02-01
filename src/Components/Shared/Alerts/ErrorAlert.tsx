import { Alert, AlertDescription, AlertTitle } from "@/Components/Shared/UI/alert";
import { BadgeAlert } from "lucide-react";

interface ErrorAlertProps {
    title: string;
    description: string;
    className: string;
}

export function ErrorAlert({ title, description, className }: ErrorAlertProps) {

    return (
        <Alert variant="destructive" className={`bg-red-500 relative ${className}`}>
            <BadgeAlert className="h-6 w-6 absolute my-1 mr-3" />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
        </Alert>
    );
}
