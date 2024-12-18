import React from "react";
import Styles from "./Item.module.css";
import ProductLogo from "../../../../assets/img/product.png"
import AddToCart from "../../../../assets/img/addToCart.png"

//  # Subcomponente para cada producto

const Item = ({onShowDetails, handleCounter}) => {

    return  (
                
                <div className={Styles.card_container}>
                    <div className={Styles.card_item}> 
                        <div className={Styles.card_item_add}>
                            <img onClick={handleCounter} src={AddToCart} alt="Add To Cart"/>
                        </div>
                        <img src={ProductLogo} alt="Imagen Producto"/>
                        <h2>Farola Derecha</h2>
                        <h3>mazda, suzuki, audi</h3>
                        <button onClick={onShowDetails}>
                            Detalles
                        </button>
                    </div>
                </div>                   
            
    ) 
}

export {Item};