import React from "react";
import Styles from "./CartLogo.module.css"
import ShoppingLogo from "../../assets/img/shoppingCart.svg"

const CartLogo = ({count}) =>{

    return <>

                <div className={Styles.shopcart}>
                    <div className={Styles.shopcart_item}>
                        <img src={ShoppingLogo} alt="Logo Carrito de Compras" />
                        <span>{count}</span>
                    </div>
                    <span className={Styles.shopcart_title}>Mi Cotización</span>
                </div>    

        </>

}

export {CartLogo};