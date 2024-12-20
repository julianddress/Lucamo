import React from "react";
import "../Header/Header.css";
import { Logo } from "./Logo";
import { Categories } from "./Categories";
import { SearchBar } from "./SearchBar";
import { Account } from "./Account";

const Header = ({count}) => {
    return (

            <nav className="navbar">

                <Logo/>
                <Categories/>
                <SearchBar/>
                <Account count={count}/>
                
            </nav>
    );
};

export {Header};
