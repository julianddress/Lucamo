import React, { ReactNode, useState } from "react";
import Header from "@/Components/Admin/Header/Header"
import { Sidebar } from "@/Components/Admin/Sidebar/Sidebar";

interface AdminLayoutProps {
  children: ReactNode; // Define que `children` debe ser un nodo de React
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {

    const [title, setTitle] = useState('');

    return (

        <div className="min-h-screen bg-sky-50">
            <Sidebar onTitleChange={setTitle} />
            <div className="pl-[60px]">
                <Header  title={title}/>
                <main className="p-6 px-12">
                    {children}
                </main>
            </div>
        </div>
        
    );
};

export { AdminLayout };
