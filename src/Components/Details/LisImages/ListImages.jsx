import React from "react";
import './ListImages.css'
import farola from "../../../assets/img/comments.svg"

const DetallesImages = () =>{

    return  <div className="image-container">
                <div className="image-principal">
                    <span>
                        <img src={farola} alt="Imagen Product"></img>
                    </span>
                </div>
                <div className="image-secondary">
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