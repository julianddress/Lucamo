import React from "react";
import Styles from "./CartSummary.module.css"
import CartItem from "../CartItem/CartItem";

const ShoppingCart = ({ onCloseCart }) =>{
    return  <section className={Styles.section}>
                <div className={Styles.section_cart}>
                    <div className={Styles.section_cart_items}>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                    </div>
                    <button className={Styles.section_cart_button}>Enviar cotizaciòn</button>
                </div>
            </section>

}

export default ShoppingCart;