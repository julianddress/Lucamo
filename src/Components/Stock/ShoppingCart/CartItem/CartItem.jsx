import React from "react";
import "./CartItem.css"
import producto from "../../../../assets/img/product.png"
import mayor from "../../../../assets/img/mayor.svg"
import menor from "../../../../assets/img/menor.svg"

const CartItem = () => {

    return(
            <div className="cart-item">
                <div className="cart-item-delete"/>
                <div className="cart-item-image">
                    <img src={producto} alt="Producto"></img>
                </div>
                <div className="cart-item-data">
                    <div className="cart-item-info">
                        <h1>Farola Derecha</h1>
                        <h2>INJ-23887</h2>
                    </div>
                    <div className="cart-item-amount">
                        <span className="cart-item-menor">
                            <img src={menor} alt="Signo Menor"></img>
                        </span>
                        <input className="cart-item-input" placeholder="1"></input>
                        <span className="cart-item-mayor">
                            <img src={mayor} alt="Signo Mayor"></img>
                        </span>
                    </div>
                </div>
            </div>
    )

}

export default CartItem;