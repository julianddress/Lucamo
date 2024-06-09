import React from "react";
import '../../App.css'
import styled from 'styled-components'
import { ColorPrincipal } from "../UI/variables";
import Container1 from "./Container1";
import Container2 from "./Container2";

const StyledHeader = styled.nav`
    display: flex;
    padding: 1rem 3rem;
    background-color: ${ColorPrincipal};
`;

const Header = () => {

    return  <StyledHeader className="alinear-items">
                <Container1 />
                <Container2 />
            </StyledHeader>
}

export default Header;