import React from "react";
import Styles from "./HomeProducts.module.css";
import {ProductCard } from "../ProductCard/ProductCard";
import {Pagination} from "../Pagination";

//  # Lista de productos con lógica de paginación

const HomeProducts = ({ handleCounter, onShowDetails }) => {

    return  <>
                <div className={Styles.container}>
                    <div className={Styles.container_ProductCard}>
                        <ProductCard handleCounter={handleCounter} onShowDetails={onShowDetails}/>
                    </div>
                    <Pagination />                    
                </div>
            </> 
}

export {HomeProducts};