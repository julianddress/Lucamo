import React from "react";
import '../../../App.css'
import Styles from './index.module.css'
import searchLogo from '../../../assets/img/search.svg';

const Container2 = () => {
    return  (
                <div className={Styles.container2}>
                    <div className={Styles.div}>
                        <input className={Styles.input} type="text" name="input" placeholder="Buscar producto"/>
                        <img src={searchLogo} alt=""/>
                    </div>
                    <span className={Styles.logo}>LUCAMO</span>
                </div>

    )  
}

export default Container2;