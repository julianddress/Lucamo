import React from "react";
import "../../../App.css"
import './Product.css'
import ProductLogo from "../../../assets/img/product.png"
import AddToCart from "../../../assets/img/addToCart.png"
import navBar from "../Navigation/navigation"

const Product = ({onShowDetails, handleCounter}) => {

    return  (
                <div className="container">
                    <div className="card-container">
                        <div className="card-item"> 
                            <div className="card-item-add">
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

                    <navBar className="navigate-container">
                        <span>
                            Hola
                        </span>
                    </navBar>
                    
                </div>
    ) 
}

export default Product;