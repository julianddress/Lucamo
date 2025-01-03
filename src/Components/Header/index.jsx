import NavLeft from "./nav-left/index";
import NavFill from "./nav-fill";
import NavRight from "./nav-right";

const Header = ({ count }) => {
    return (
        <nav className="flex justify-center bg-sky-950">
            <div className="w-screen grid items-center 
                    grid-cols-2 grid-rows-2 gap-y-1 p-1 
                    md:grid-cols-5 md:grid-rows-1 md:gap-1 md:p-1 md:mx-2 md:py-2
                    lg:grid-cols-8 lg:grid-rows-0 lg:gap-3 lg:p-1 lg:py-2
            ">
                <NavLeft />
                <NavFill />
                <NavRight count={count} />
            </div>
        </nav>
    );
};

export { Header };

