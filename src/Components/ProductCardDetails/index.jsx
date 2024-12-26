import React from "react";
import Styles from './ProductCardDetails.module.css'
import DetallesData from "./Info/Info";
import DetallesImages from './LisImages';
import closeTab from "../../assets/img/closeTab.svg"

const ProductCardDetails = ({onCloseDetails}) => {

    return  <div className={Styles.overlay} onClick={onCloseDetails}>
                <div className={Styles.info_container}>
                    <div className={Styles.info_close_tab} onClick={onCloseDetails}>
                        <img src={closeTab} alt="Close Tab"/>
                    </div>
                    <DetallesImages></DetallesImages>
                    <DetallesData></DetallesData>
                </div>
            </div>
}

export default ProductCardDetails;