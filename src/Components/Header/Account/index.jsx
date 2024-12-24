import React from "react";
import "./Account.css";
import Profile from "../../../assets/img/profile.svg"
import Cart from "../../../assets/img/shoppingCart.svg"
import { useCart } from "../../../Context/CartContext";

const Account = () =>{

    const {count} = useCart();

    return (

                <div className="navbar__account-container padauk-bold">

                    <div className="navbar__shoppingcart">
                        <span className="navbar__shoppingcart-count">{count}</span>
                        <a href="# " className="navbar__shoppingcart-link">
                            <img src={Cart} alt="Shopping Cart" className="navbar__shoppingcart-image"/>
                        </a>
                    </div>
                    
                    <div className="navbar__account">
                        <span className="navbar__username">Hola,<br/>Julian</span>
                        <a href="# " className="navbar__account-link">
                            <img src={Profile} alt="User account" className="navbar__account-img" />
                        </a>
                    </div>

                </div>

    )
};

export {Account};