import React from "react";
import "./Account.css";
import Profile from "../../../assets/img/profile.svg"
import Cart from "../../../assets/img/shoppingCart.svg"
import { useCart } from "../../../Context/CartContext";

const Account = () =>{

    const {count} = useCart();

    return (

                <div className="navbar__account">

                    <span className="navbar__shoppingcart-count phudu-regular ">{count}</span>

                    <a href="# " className="navbar__shoppingcart-link">
                        <img src={Cart} alt="Shopping Cart" className="navbar__shoppingcart-image"/>
                    </a>
                    
                    <a href="# " className="navbar__account-link">
                        <span className="navbar__username padauk-bold">Hola, Julian</span>
                        <img src={Profile} alt="User account" className="navbar__account-img" />
                    </a>

                </div>

    )
};

export {Account};