import React from "react";
import bannerCarro from "../../assets/img/car.png"
import Styles from "./Banner.module.css";
import "../../assets/css/base.css"

const Banner = () => {
    return  <>
                
                <div className={Styles.banner}>
                    <img src={bannerCarro} alt="Carro Mustang" />
                </div>
                
            </>
};

export {Banner};