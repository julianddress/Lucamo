import React from "react";
import "./Categories.css";

const Categories = () => {
    return  (
    
                <div className="navbar__categories">
                    <ul className="navbar-links inter-bold">
                        <li>
                            <button 
                                // onClick={() => selectCategory("national")} 
                                className="btn-category"
                                >
                                <a href="# " className="navbar__link">
                                    PRODUCTOS LOCALES
                                </a>
                            </button>
                        </li>
                        <li>
                            <span className="navbar__line">|</span>
                        </li>
                        <li>
                            <button 
                                // onClick={() => selectCategory("imported")} 
                                className="btn-category"
                                >
                                <a href="# " className="navbar__link">
                                        IMPORTADOS
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
    
    
    )
    
}

export {Categories};