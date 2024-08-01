import React from "react";
import "./ShoppingCart.css"
import CartItem from "./CartItem/CartItem";

const ShoppingCart = ({ onCloseCart }) =>{
    return  <section className="section">
                <div className="section-cart">
                    <div className="section-cart-items">
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                    </div>
                    <button className="section-cart-button">Enviar cotizaciòn</button>
                </div>
            </section>

}

export default ShoppingCart;