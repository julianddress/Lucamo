import React, { useState } from "react";
import "../../App.css"
import './Stock.css'
import ShoppingLogo from "../../assets/img/shoppingCart.svg"
import Products from "./Products/Index";
import Details from "./Details/index"; 

const Stock = () => {

    // HOOK FOR DETAILS
    const [ showDetails, setShowDetails] = useState(false);

    const openDetails = () =>{
        setShowDetails(true);
    }

    const closeDetails = () =>{
        setShowDetails(false);
    }

    // HOOK FOR SHOP CART
    const [count, setCount ] = useState(0);

    const incrementCart = () => {
        setCount(count + 1);
    }

    return  (
                <section>
                    <div className="shopcart alinear-items">
                        <div className="shopcart-item alinear-items">
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