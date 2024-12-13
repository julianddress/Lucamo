import React, { useState } from "react";
import Styles from './Stock.module.css'
import ShoppingLogo from "../../assets/img/shoppingCart.svg"
import Products from "./Products/Products";
import Details from "./Details/index"; 
import ShoppingCart from "./Cart/CartSummary/CartSummary";

const Stock = () => {

    // HOOK FOR DETAILS
    const [ showDetails, setShowDetails] = useState(false);

    const openDetails = () =>{
        setShowDetails(true);
    }

    const closeDetails = () =>{
        setShowDetails(false);
    }

    // HOOK FOR SHOP CART LOGO
    const [count, setCount ] = useState(0);

    const incrementCart = () => {
        setCount(count + 1);
    }

    // HOOK FOR SHOPPING CART
    const [ showCart, setShowCart] = useState(false);

    const openCart = () =>{
        setShowCart(true);
    }

    const closeCart = () =>{
        setShowCart(false);
    }

    return  (
                <section>
                    {showCart && <ShoppingCart onCloseCart={closeCart}/>}
                    <div className={Styles.shopcart}>
                        <div className={Styles.shopcart_item} onClick={openCart}>
                            <img src={ShoppingLogo} alt="Logo Carrito de Compras" />
                            <span>{count}</span>
                        </div>
                        <span className={Styles.shopcart_title}>Mi Cotización</span>
                    </div>

                    <div className={Styles.container_products}>
                        <Products handleCounter={incrementCart} onShowDetails={openDetails}/>
                        {showDetails && <Details onCloseDetails={closeDetails} />}
                    </div>
                    
                </section>
    )
}

export {Stock};