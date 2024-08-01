import React, { useState } from "react";
import "../../App.css"
import './Stock.css'
import ShoppingLogo from "../../assets/img/shoppingCart.svg"
import Products from "./Products/Index";
import Details from "./Details/index"; 
import ShoppingCart from "./ShoppingCart/ShoppingCart";

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
                    <div className="shopcart alinear-items">
                        <div className="shopcart-item alinear-items" onClick={openCart}>
                            <img src={ShoppingLogo} alt="Logo Carrito de Compras" />
                            <span>{count}</span>
                        </div>
                        <span className="shopcart-title">Mi Cotización</span>
                    </div>

                    <div className="container-products">
                        <Products handleCounter={incrementCart} onShowDetails={openDetails}/>
                        {showDetails && <Details onCloseDetails={closeDetails} />}
                    </div>
                    
                </section>
    )
}

export default Stock;