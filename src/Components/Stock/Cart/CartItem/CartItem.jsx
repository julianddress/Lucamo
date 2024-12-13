import React from "react";
import Styles from "./CartItem.module.css"
import producto from "../../../../assets/img/product.png"
import mayor from "../../../../assets/img/mayor.svg"
import menor from "../../../../assets/img/menor.svg"

const CartItem = () => {

    return(
            <div className={Styles.cart_item}> 
                <div className={Styles.cart_item_delete}/>
                <div className={Styles.cart_item_image}>
                    <img src={producto} alt="Producto"></img>
                </div>
                <div className={Styles.cart_item_data}>
                    <div className={Styles.cart_item_info}>
                        <h1>Farola Derecha</h1>
                        <h2>INJ-23887</h2>
                    </div>
                    <div className={Styles.cart_item_amount}>
                        <span className={Styles.cart_item_menor}>
                            <img src={menor} alt="Signo Menor"></img>
                        </span>
                        <input className={Styles.cart_item_input} placeholder="1"></input>
                        <span className={Styles.cart_item_mayor}>
                            <img src={mayor} alt="Signo Mayor"></img>
                        </span>
                    </div>
                </div>
            </div>
    )

}

export default CartItem;