import React from "react";
import './Info.css'

const DetallesData = () =>{

    return      <div className="data-container">
                    <div className="data-container-top">
                        <div className="data-container-reference">
                            <span>
                                <h1>
                                    Farola Derecha 18V JU
                                </h1>
                            </span>
                            <span>
                                <h3>
                                    Ref. IN4 - 232928
                                </h3>
                            </span>
                        </div>
                        <div className="data-container-description-title">
                            <span>
                                <h3>
                                    Sobre este articulo:
                                </h3>
                            </span>
                        </div>
                        <div className="data-container-description-content">
                            <ul>
                                <li>Utilizado en mazda, honda, suzuki y mucho muchas otras referencias mas.</li>
                                <li>Util para tractomulas, camiones y demas.</li>
                                <li>Provee iluminacion de 100 watts.</li>
                                <li>Alcance de 10 metro de profundidad.</li>
                            </ul>
                        </div>
                        <div className="data-container-description-features">
                            <ul>
                                <li>
                                    <h3>
                                        Tamaño:
                                    </h3> 
                                    <span>
                                        100 cm x 50 cm
                                    </span>
                                </li>
                                <li>
                                <h3>
                                        Color:
                                    </h3> 
                                    <span>
                                        Azul
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="data-container-bottom">
                        <button>AÑADIR</button>
                    </div>
                </div>

}

export default DetallesData;