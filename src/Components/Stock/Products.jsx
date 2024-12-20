import React from "react";
import Styles from './Products.module.css'
import {ProductCard } from "../ProductCard";
import {Pagination} from "../Pagination"

//  # Lista de productos con lógica de paginación

const Products = ({ handleCounter, onShowDetails, count }) => {

    return  <>
                <div className={Styles.container}>
                    <ProductCard handleCounter={handleCounter} onShowDetails={onShowDetails}/>
                    <Pagination />                    
                </div>
            </> 
}

export default Products;