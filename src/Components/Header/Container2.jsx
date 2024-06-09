import React from "react";
import styled from 'styled-components'
import '../../App.css'
import searchLogo from '../../assets/img/search.svg';

const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-end;
    div{
        position: relative;
    }
    gap: 15%;
`;

const StyledInput = styled.input`
    width: 300px;
    padding: 12px 15px;
    border-radius: 20px;
    background-color: transparent;
    border: white 2px solid;
    font-size: 18px;
    color: white;
    &::placeholder {
        color: #FFF; 
    }
    &:focus{
        outline: none;
        border: #A3FFBF 2px solid;
    }
`;

const StyledSearch = styled.img`
    position: absolute;
    right: 8px;
    top: 5px;
    cursor: pointer;
`;

const StyledLogo = styled.span`
    font-size: 32px;
    font-weight: 900;
    color: white;
`;

const Container2 = () => {
    return  <Container className="alinear-items">
                <div>
                    <StyledInput type="text" name="input" placeholder="Buscar"/>
                    <StyledSearch src={searchLogo} alt=""/>
                </div>
                <StyledLogo>LUCAMO</StyledLogo>
            </Container>
}

export default Container2;