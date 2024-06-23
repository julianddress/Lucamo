import React from "react";
import "../../../App.css"
import './Product.css'
import ProductLogo from "../../../assets/img/product.png"
import AddToCart from "../../../assets/img/addToCart.png"

const Product = () => {
    return  (
                <div className="container">
                    <div className="card-container">
                        <div className="card-item"> 
                            <div className="card-item-add">
                                <img src={AddToCart} alt="Add To Cart"/>
                            </div>
                            <img src={ProductLogo} alt="Imagen Producto"/>
                            <h2>Farola Derecha</h2>
                            <h3>mazda, suzuki, audi</h3>
                            <button>Detalles</button>
                        </div>
                    </div>

                    <div className="navigate-container">
                        <span>
                            Hola
                        </span>
                    </div>
                    
                </div>
    ) 
}

export default Product;