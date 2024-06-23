import React from "react";
import "../../App.css"
import './Details.css'
import DetallesData from "./Info/Info";
import DetallesImages from './LisImages/ListImages';
import closeTab from "../../assets/img/closeTab.svg"

const Details = () => {

    return  <div className="info-container">
                <div className="info-close-tab">
                    <img src={closeTab} alt="closeTab Tbb"/>
                </div>
                <DetallesImages></DetallesImages>
                <DetallesData></DetallesData>
            </div>
}

export default Details;