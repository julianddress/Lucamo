import React from "react";
import styled from "styled-components";
import "../../App.css"
import Brand from "../../assets/img/brand.svg"
import Price from "../../assets/img/price.svg"
import Comments from "../../assets/img/comments.svg"
import Profile from "../../assets/img/profile.svg"

const Container = styled.div`
    padding: 30px;
    height: max-content;
    border-radius: 50px;
    background-color: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.29);
`;

const ListContainer = styled.div`
    max-width: 250px;
    height: auto;
`;

const FiltersContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 22px;
    h3{
        position: relative;
        font-weight: 400;
    }
    ::before{
            position: absolute;
            content: "";
            left: 0;
            top: 100%;
            width: 100%;
            height: 1px;
            background: rgba(25, 133, 191, 0.45);
    }
`;

const DataContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 70%;
    margin: 10px 0;
    span{
        margin: 0 8px;
    }
`;

const StyledInput = styled.input`
    width: 15px;
    height: 15px;
    margin-right: 10px;
`;

const StyledInputText = styled.input`
    width: 90px;
    height: 20px;
    padding: 3px 5px;
    border-radius: 5px;
    border-style: none;
    background: #D9D9D9;
`;

const CommentsContainer = styled.div`
    border-radius: 20px;
    border: 1px solid #C5C5C5;
    padding: 12px;
    height: auto;
    overflow: hidden;
    .span{
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }
`;

const DatosUsuario = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    img{
        width: 40px;
    }
    h1{
        margin: 0;
    }
`;

const Categoria = () => {
    return  <Container>
                <ListContainer>
                    <FiltersContainer>
                        <h3>Referencias</h3>
                        <img src={Brand} alt="Icono" />
                    </FiltersContainer>
                    <DataContainer>
                        <StyledInput type="radio" name="" value="" />
                        <label for="">LRC</label>    
                    </DataContainer>
                    <DataContainer>
                        <StyledInput type="radio" name="" value="" />
                        <label for="">18920 - LS</label>    
                    </DataContainer>
                    <DataContainer>
                        <StyledInput type="radio" name="" value="" />
                        <label for="">RTR - 2023</label>    
                    </DataContainer>
                </ListContainer>
                <ListContainer>
                    <FiltersContainer>
                        <h3>Precio</h3>
                        <img src={Price} alt="Icono" />
                    </FiltersContainer>
                    <DataContainer>
                        <StyledInputText type="text" name="precio-min" value="" placeholder="$"/>
                        <span for="">Hasta</span>    
                        <StyledInputText type="text" name="precio-max" value="" placeholder="$"/>
                    </DataContainer>
                    <DataContainer>
                        <StyledInput type="radio" name="" value="" />
                        <label for="">Todos</label>    
                    </DataContainer>
                </ListContainer>
                <ListContainer>
                    <FiltersContainer>
                        <h3>Top Comentarios</h3>
                        <img src={Comments} alt="Icono" />
                    </FiltersContainer>
                    <CommentsContainer>
                        <DatosUsuario>
                            <img src={Profile} alt="Imagen Perfil" />
                            <h1>Auron Play</h1>
                        </DatosUsuario>
                            <span className="span">Excelente producto, util para todo tipo de carro.</span>
                    </CommentsContainer>
                </ListContainer>
            </Container>

}

export default Categoria;