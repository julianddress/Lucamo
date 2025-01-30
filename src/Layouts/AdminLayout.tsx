import React, { ReactNode, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/Components/Admin/Header/Header";
import { Sidebar } from "@/Components/Admin/Sidebar/Sidebar";

interface AdminLayoutProps {
    children: ReactNode; 
}

const sidebarItems = [
    { label: "General", href: "/Admin/Inicio" },
    { label: "Estadísticas", href: "/Admin/Estadisticas" },
    { label: "Ventas", href: "/Admin/Ventas" },
    { label: "Productos", href: "/Admin/Productos" },
    { label: "Usuarios", href: "/Admin/Usuarios" },
    { label: "Configuración", href: "/Admin/Configuracion" },
];

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const [title, setTitle] = useState<string>("General");
    const location = useLocation();

    // Actualizar el título al cargar la página según la URL actual
    useEffect(() => {
        const currentItem = sidebarItems.find(item => item.href === location.pathname);
        if (currentItem) setTitle(currentItem.label);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-sky-50">
            <Sidebar onTitleChange={setTitle} />
            <div className="pl-[60px]">
                <Header title={title} />
                <main className="p-6 px-12">{children}</main>
            </div>
        </div>
    );
};

export { AdminLayout };
