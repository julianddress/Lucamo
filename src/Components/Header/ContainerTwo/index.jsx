import React from "react";
import '../../../App.css'
import './index.css'
import searchLogo from '../../../assets/img/search.svg';

const Container2 = () => {
    return  (
                <div className="alinear-items container-two">
                    <div className="div">
                        <input className="input" type="text" name="input" placeholder="Buscar"/>
                        <img src={searchLogo} alt=""/>
                    </div>
                    <span className="logo">LUCAMO</span>
                </div>

    )  
}

export default Container2;