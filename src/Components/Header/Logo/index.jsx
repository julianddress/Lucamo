import LucamoLogo from "../../../assets/img/logo.svg";
import { Menu } from 'lucide-react';

const Logo = () => {
    return (
        <div className="flex w-fit items-center gap-2 justify-self-start
                        "
        >
            <div className="block md:hidden self-end
                            "
            >
                <button href="# " className="">
                    <Menu       
                        size={24}
                        color="white"
                    />
                </button>
            </div>
            <div className="w-3/6 
                            md:w-4/5"
            >
                <a href="# " className="block">
                    <img
                        src={LucamoLogo}
                        alt="Lucamo Logo"
                        className="w-full"
                    />
                </a>
            </div>
        </div>
    );
};

export { Logo };
