import { useEffect, useState } from 'react';
import { User, ChevronRight, ChevronDown } from "lucide-react";
import DropDownUser from '@/Components/Client/DropDown-user/DropDownUser';
import { useAuth } from '@/Context/AuthContext';

const NavRight = () => {
    const { userData } = useAuth();
    const [title, setTitle] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    useEffect(() => {
        setTitle(userData ? `Hola, ${userData?.first_name}` : 'Identifícate');
    }, [userData]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <div className="overflow-hidden flex items-center justify-end gap-4 md:gap-2 lg:col-span-1">
            <DropDownUser onToggle={toggleDropdown}>
                <div className="flex items-center relative">
                    <span className="text-wrap truncate text-center text-[0.8rem] leading-4 text-white 
                                    w-full md:max-w-[5rem] lg:text-sm md:leading-4 lg:leading-4"
                    >
                        {title}
                    </span>
                    {isDropdownOpen ? (
                        <ChevronDown size={14} className="text-white stroke-[5px] mx-1" />
                    ) : (
                        <ChevronRight size={14} className="text-white stroke-[5px]" />
                    )}
                    <User size={30} color="white" aria-label="Configuración de tu cuenta" />
                </div>
            </DropDownUser>
        </div>
    );
};

export default NavRight;
