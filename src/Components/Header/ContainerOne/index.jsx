import React from "react";
import '../../../App.css'
import './index.css'
import menuLogo from '../../../assets/img/menu.svg'
import locationLogo from '../../../assets/img/location.svg'

const Container1 = () => {
    return  (
                <div className="alinear-items containerOne">
                    <div className="menu">
                        <span className="menu-text">Menu</span>
                        <img src={menuLogo} alt="Menu logo" className="menu-logo"/>
                    </div>

                    <div className="alinear-items options">
                        <a href="id">PRODUCTOS NACIONALES</a>
                        <span >|</span>
                        <a className="signup" href="id">IMPORTADOS</a>
                    </div>

                    <div className="location">
                        <a href="https://maps.app.goo.gl/HQHhdMcbm8Qfdq9H6" target="blank" className="alinear-items">
                            <img src={locationLogo} alt="Logo Ubicación"/>
                            Ubicación Impolujos
                        </a>                    
                    </div>
                </div>
    )
}

export default Container1;