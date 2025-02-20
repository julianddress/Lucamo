import NavLeft from "./nav-left/navLeft";
import NavFill from "./nav-fill/navFill";
import NavRight from "./nav-right/navRight";

const Header = () => {
    return (
        <nav className="flex justify-center bg-[var(--background-color-banner)] ">
            <div className="w-screen grid items-center 
                    grid-cols-2 grid-rows-2 gap-y-1 p-1 
                    md:flex md:flex-row md:justify-between md:mx-3 md:my-1"
                >
                <NavLeft />
                <NavFill />
                <NavRight />
            </div>
        </nav>
    );
};

export { Header };

