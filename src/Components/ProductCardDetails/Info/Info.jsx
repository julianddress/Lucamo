import React from "react";
import Styles from './Info.module.css'
import { useCart } from "../../../Context/CartContext";

const DetallesData = () =>{

    const {incrementCart} = useCart();

    return      <div className={Styles.data_container}>
                    <div className={Styles.data_container_top}>
                        <div className={Styles.data_container_reference}>
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
                        <div className={Styles.data_container_description_title}>
                            <span>
                                <h3>
                                    Sobre este articulo:
                                </h3>
                            </span>
                        </div>
                        <div className={Styles.data_container_description_content}>
                            <ul>
                                <li>Utilizado en mazda, honda, suzuki y mucho muchas otras referencias mas.</li>
                                <li>Util para tractomulas, camiones y demas.</li>
                                <li>Provee iluminacion de 100 watts.</li>
                                <li>Alcance de 10 metro de profundidad.</li>
                            </ul>
                        </div>
                        <div className={Styles.data_container_description_features}>
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
                    <div className={Styles.data_container_button}>
                        <button onClick={incrementCart}>AÑADIR</button>
                    </div>
                </div>

}

export default DetallesData;