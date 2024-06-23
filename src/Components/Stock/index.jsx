import React from "react";
import "../../App.css"
import './Stock.css'
import ShoppingLogo from "../../assets/img/shoppingCart.svg"
import Products from "./Products/Index";

const Stock = () => {
    return  (
                <section>
                    <div className="shopcart alinear-items">
                        <div className="shopcart-item alinear-items">
                            <img src={ShoppingLogo} alt="Logo Carrito de Compras" />
                            <span>0</span>
                        </div>
                        <span className="shopcart-title">Mi Cotización</span>
                    </div>

                    <div className="container-products">
                        <Products/>
                    </div>
                    
                </section>
    )
}

export default Stock;