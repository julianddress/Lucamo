import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/UI/dropdown-menu";
import { User } from "lucide-react";
import { useAuth } from "@/Context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from 'lucide-react';

function DropDownUser() {

    const navigate = useNavigate();

    const { logout, user } = useAuth();
    const handleUser = () => user ? logout() : navigate('/signin');

    const [title, setTitle] = useState(''); 
    useEffect(() => { setTitle( user ? 'Cerrar sesión' : 'Iniciar sesión');}, [navigate, user]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex items-center text-center bg-transparent border-none">
                    <ChevronRight size={16} className="absolute right-8 text-white stroke-[5px]" />
                    <User size={34} color="white" aria-label="Configuracion de tu cuenta" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem  onClick={handleUser}>{title}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default DropDownUser;
