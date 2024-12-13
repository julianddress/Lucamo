import React from "react";
import "../../../App.css"
import Styles from './Details.module.css'
import DetallesData from "./Info/Info";
import DetallesImages from './LisImages/ListImages';
import closeTab from "../../../assets/img/closeTab.svg"

const Details = ({onCloseDetails}) => {

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

export default Details;