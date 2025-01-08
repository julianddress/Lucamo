import React, { useEffect, useState } from 'react';
import DropDownUser from '@/Components/DropDown-user/DropDownUser';
import { useAuth } from '@/Context/AuthContext';

const NavRight = () => {

    const { session } = useAuth();
    const [title, setTitle] = useState(''); 

    useEffect(() => {
        console.log(session)
        const userName = session?.user?.user_metadata?.FirstName;
        setTitle( session?.user ? `Hola, ${userName}` : 'Identificate');
    }, [session]);    

    return (
        <div className="overflow-hidden flex items-center justify-end gap-4 md:gap-2 lg:col-span-1">
            <div className="flex items-center relative lg:ml-[10%]">
                <span className="text-wrap truncate text-center text-[0.8rem] leading-4 mr-4 text-white 
                                max-w-[8rem] lg:text-base md:leading-4 lg:leading-5"
                >
                    {title}
                </span>
                <DropDownUser />
            </div>
        </div>
    );
};

export default NavRight;
