import { cn } from "@/lib/utils";
import {
    BarChart3,
    Box,
    Home,
    Package,
    Settings,
    ShoppingCart,
    Users,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
    { icon: Home, label: "General", href: "/Admin/Inicio" },
    { icon: BarChart3, label: "Estadísticas", href: "/Admin/Estadisticas" },
    { icon: ShoppingCart, label: "Ventas", href: "/Admin/Ventas" },
    { icon: Package, label: "Productos", href: "/Admin/Productos" },
    { icon: Users, label: "Usuarios", href: "/Admin/Usuarios" },
    { icon: Settings, label: "Configuración", href: "/Admin/Configuracion" },
];

export function Sidebar({ onTitleChange }: { onTitleChange: (title: string) => void }) {

    const location = useLocation();

    return (
        <div className="group fixed left-0 top-0 h-full w-[60px] hover:w-[240px] bg-zinc-900 transition-all duration-150 ease-in-out z-50">
            <div className="flex h-[60px] items-center justify-center border-b border-zinc-800">
                <Box className="h-6 w-6 text-purple-400" />
                <span className="ml-3 hidden font-bold text-white group-hover:block">
                    Admin Panel
                </span>
            </div>
            <nav className="mt-4 flex flex-col gap-2 px-2">
                {sidebarItems.map((item) => {
                    const isActive = location.pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={cn(
                                    "flex h-10 items-center rounded-md px-3 text-sm font-medium transition-colors",
                                    "hover:bg-zinc-800 hover:text-purple-400",
                                    isActive ? "bg-zinc-800 text-purple-400" : "text-zinc-400"
                                )}
                                onClick={() => onTitleChange(item.label)} 
                            >
                                <item.icon className="h-5 w-5" />
                                <span className="ml-3 hidden group-hover:block">
                                    {item.label}
                                </span>
                            </Link>
                        );

                    })
                }
            </nav>
        </div>
    );
}
