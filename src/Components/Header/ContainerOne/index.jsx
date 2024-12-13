import React from "react";
import Styles from './index.module.css'
import locationLogo from '../../../assets/img/location.svg'

const Container1 = () => {
    return  (
                <div className={Styles.container1}>
                    <div className={Styles.location}>
                        <a href="https://maps.app.goo.gl/HQHhdMcbm8Qfdq9H6" target="blank">
                            <img src={locationLogo} alt="Logo Ubicación"/>
                            Ubicación
                        </a>                    
                    </div>

                    <div className={Styles.options}>
                        <a href="id">PRODUCTOS NACIONALES</a>
                        <span >|</span>
                        <a className={Styles.signup} href="id">IMPORTADOS</a>
                    </div>
                </div>
    )
}

export default Container1;