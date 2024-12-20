import React from "react";
import "./SearchBar.css";
import searchLogo from '../../../assets/img/search.svg';

const SearchBar = () => {
    return  (
                <div className="searchbar inter-regular">

                    <div className="filter">
                        <select className="filter-options">
                            <option>Todos</option>
                            <option value="Mazda">Mazda</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Renault">Renault</option>
                        </select>
                    </div>
                    <input className="search-input" type="text" name="input" placeholder="Buscar en Lucamo"/>
                    <button className="search-button">
                        <img src={searchLogo} alt="Buscar" className="search-icon"/>    
                    </button>

                </div>
    )
}

export {SearchBar};