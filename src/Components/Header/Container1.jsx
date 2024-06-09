import React from "react";
import styled from 'styled-components'
import '../../App.css'
import { ColorBtns } from "../UI/variables";
import menuLogo from '../../assets/img/menu.svg';
import locationLogo from '../../assets/img/location.svg'

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    color: white;
`;

const StyledMenu = styled.div`
    padding: 10px 0;
    text-align: center;
    cursor: pointer;
    .menu-text{
        display: block;
        font-size: 22px;
    }
    .menu-logo{
        max-width: 30px;
    }
`

const StyledBtns = styled.div`
    a{
        margin: 20px;
        text-decoration: none;
        color: white;
    }
    span{
        font-size: 32px;
    }
    .signup{
        font-size: 22px;
        padding: 10px 18px;
        color: black;
        border-radius: 16px;
        background-color: ${ColorBtns};
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
    }
`;

const StyledLocation = styled.div`
    a{
        font-size: 22px;
        text-decoration: none;
        color: white;
    }
    img{
        margin-right: 10px;
    }
`;

const Container1 = () => {
    return  <Container className="alinear-items">
                <StyledMenu>
                    <span className="menu-text">Menu</span>
                    <img src={menuLogo} alt="Menu logo" className="menu-logo"/>
                </StyledMenu>

                <StyledBtns className="alinear-items">
                    <a href="id">INICIAR SESION</a>
                    <span >|</span>
                    <a className="signup" href="id">REGISTRARME</a>
                </StyledBtns>

                <StyledLocation>
                    <a href="https://maps.app.goo.gl/HQHhdMcbm8Qfdq9H6" target="blank" className="alinear-items">
                        <img src={locationLogo} alt="Logo Ubicación"/>
                        Ubicación Impolujos
                    </a>                    
                </StyledLocation>
            </Container>
}

export default Container1;