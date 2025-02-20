import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/Components/Shared/UI/dropdown-menu";
import { Separator } from "@/Components/Shared/UI/separator";

import { useAuth } from "@/Context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface DropDownUserProps {
    onToggle: () => void;
    children: React.ReactNode
}

function DropDownUser({children, onToggle}: DropDownUserProps) {

    const navigate = useNavigate();
    const { logout, session } = useAuth();
    const [title, setTitle] = useState(''); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleSignout = async () => {
        try {
            await logout();
            navigate('/signin')
        } catch (err) {
            console.error(err);
        }
    }
    
    useEffect(() => { setTitle( session?.user ? 'Cerrar sesión' : 'Iniciar sesión') }, [session]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
        onToggle();
    }

    return (
        <DropdownMenu onOpenChange={toggleDropdown}>
            <DropdownMenuTrigger className="focus:outline-none">
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black rounded-sm">
                <DropdownMenuLabel className="text-sm">Tu cuenta</DropdownMenuLabel>
                <Separator className="bg-slate-500" />
                <a href="">
                    <DropdownMenuItem className="text-sm focus:bg-lime-300">Cuenta</DropdownMenuItem>
                </a>
                <a href="">
                    <DropdownMenuItem className="text-sm focus:bg-lime-300">Historial de compras</DropdownMenuItem>
                </a>
                <a href="/carrito/productos">
                    <DropdownMenuItem className="text-sm focus:bg-lime-300">Carrito de compras</DropdownMenuItem>
                </a>
                <a href="">
                    <DropdownMenuItem className="text-sm focus:bg-lime-300">PQRS</DropdownMenuItem>
                </a>
                <Separator className="bg-slate-300"/>
                <DropdownMenuItem 
                    className="text-sm focus:bg-red-400 focus:text-white" 
                    onClick={handleSignout}>
                            {title}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default DropDownUser;
