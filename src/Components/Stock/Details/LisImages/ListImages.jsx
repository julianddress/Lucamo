import React from "react";
import Styles from './ListImages.module.css'
import farola from "../../../../assets/img/comments.svg"

const DetallesImages = () =>{

    return  <div className={Styles.image_container}>
                <div className={Styles.image_principal}>
                    <span>
                        <img src={farola} alt="Imagen Product"></img>
                    </span>
                </div>
                <div className={Styles.image_secondary}>
                    <ul>
                        <li>
                            <span>
                                <input></input>
                                <img src={farola} alt="Opciones"></img>
                            </span>
                        </li>
                        <li>
                            <span>
                                <input></input>
                                <img src={farola} alt="Opciones"></img>
                            </span>
                        </li>
                        <li>
                            <span>
                                <input></input>
                                <img src={farola} alt="Opciones"></img>
                            </span>
                        </li>
                        <li>
                            <span>
                                <input></input>
                                <img src={farola} alt="Opciones"></img>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
    
}

export default DetallesImages;