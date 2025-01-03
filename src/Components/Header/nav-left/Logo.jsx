import LucamoLogo from "../../../assets/img/logo.svg";
import { Menu } from 'lucide-react';

const Logo = () => {
    return (
        
            <div className="flex items-center">
                <div className="flex md:hidden">
                    <button href="# " className="">
                        <Menu
                            size={22}
                            color="white"
                            className="mr-2"
                        />
                    </button>
                </div>
                <div className="w-full">
                    <a href="# ">
                        <img
                            src={LucamoLogo}
                            alt="Lucamo Logo"
                            className="w-[50%] md:w-[75%] lg:w-[70%] xl:w-[75%]"
                        />
                    </a>
                </div>
            </div>
        
    )
}

export default Logo;
