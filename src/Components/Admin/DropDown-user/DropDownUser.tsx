import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/Shared/UI/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/Components/Shared/UI/avatar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOutAdmin } from '@/Services/adminService';
import { useAdmin } from "@/Context/AdminContext";

function DropDownUser() {

    const navigate = useNavigate();
    const { adminSession, setAdminSession, adminData } = useAdmin();
    const [title, setTitle] = useState(''); 

    // Función para manejar el log out
    const handleSignout = async () => {
        try {
            await signOutAdmin();
            setAdminSession(null)
            navigate('Admin/signin')
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => { setTitle( adminSession?.user ? 'Cerrar sesión' : 'Iniciar sesión') }, [adminSession]);

    return (
        <DropdownMenu >
            <DropdownMenuTrigger>
                <div className="flex items-center text-center bg-transparent border-none">
                    <div className="w-max h-max px-3 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-900">
                        Mi Cuenta
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-900">
                <DropdownMenuLabel className="flex items-center gap-x-2 py-4 mx-2">
                    <Avatar>
                        <AvatarImage src="https://api.dicebear.com/9.x/fun-emoji/svg" alt="Avatar" />
                        <AvatarFallback>
                            <span>N/A</span>
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col ml-2">
                        <span>{adminData?.first_name}</span>
                        <span className="text-muted-foreground text-xs">
                            {adminData?.email}
                        </span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-purple-400"/>
                <DropdownMenuItem>Mi perfil</DropdownMenuItem>
                <DropdownMenuItem>Configuración</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-purple-400"/>
                <DropdownMenuItem  onClick={handleSignout}>{title}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default DropDownUser;
