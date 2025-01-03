import React from "react";
import Styles from "./ProductCard.module.css";
import ProductLogo from "../../assets/img/product.png"
import AddToCart from "../../assets/img/addToCart.png"
import { useCart } from "../../Context/CartContext";

//  # Subcomponente para cada producto

const ProductCard = ({onShowDetails}) => {

    const { incrementCart } = useCart();

    return  <> 
                <div className={Styles.card_item}> 
                    <div className={Styles.card_item_add}>
                        <img onClick={incrementCart} src={AddToCart} alt="Add To Cart"/>
                    </div>
                    <img src={ProductLogo} alt="Imagen Producto"/>
                    <h2>Farola Derecha</h2>
                    <h3>mazda, suzuki, audi</h3>
                    <button onClick={onShowDetails}>
                        Detalles
                    </button>
                </div>                   
            </> 
}

export {ProductCard};