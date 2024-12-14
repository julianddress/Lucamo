import React from "react";
import Styles from './Products.module.css'
import { Item } from "./Item/Item";
import {Pagination} from "./Pagination/Pagination"

//  # Lista de productos con lógica de paginación

const Products = () => {

    return  (
                <div className={Styles.container}>
                    <Item/>
                    <Pagination />                    
                </div>
    ) 
}

export default Products;