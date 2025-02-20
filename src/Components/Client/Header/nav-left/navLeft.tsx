import Logo from "../../Logo/Logo";
import { Menu } from 'lucide-react';

const NavLeft = () => {
    return (

        <div className='flex items-center w-fit'>
            <div className="flex md:hidden"> 
                <Menu
                    size={22}
                    color="white"
                    className="mr-2"
                />
            </div>
            <Logo />
        </div>
    
    )
}

export default NavLeft;