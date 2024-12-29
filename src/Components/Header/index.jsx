import { Logo } from "./Logo";
import { Categories } from "./Categories";
import { SearchBar } from "./SearchBar";
import { Account } from "./Account";

const Header = ({ count }) => {
    return (
        <nav
        className="grid 
                    grid-cols-2 grid-rows-2 gap-y-2 p-2 
                    md:grid-cols-5 md:grid-rows-1 md:gap-2 md:p-3 
                    lg:grid-cols-8 lg:grid-rows-0 lg:gap-4 lg:p-4
                    bg-sky-950
                    "
        >
            <Logo />
            <Categories />
            <SearchBar />
            <Account count={count} />
        </nav>
    );
};

export { Header };

