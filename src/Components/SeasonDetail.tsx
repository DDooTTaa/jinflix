import React from "react";
import styled from "styled-components";

const Container = styled.div`
    font-size: 12px;
`;


const Image = styled.div<{bgUrl:string}>`
    background-image:url(${props => props.bgUrl});
    width: 110px;
    height:180px;
    background-size: cover;
    border-radius: 2px;
    background-position:center center;
`;

const Name = styled.h2`
    position:relative;
    margin-bottom: 3px;
`;

const Character_name = styled.h3`
    position:relative;
    margin-bottom: 3px;
`;



const ImageContainer = styled.div`
    margin-bottom: 5px;
    position:relative;
`;


interface PosterType {
    imageUrl : string,
    name : string,
    character_name : string
}

const Poster:React.FC<PosterType> = ({ imageUrl, name, character_name }) =>
    <Container>
        <ImageContainer>
            <Image bgUrl={
                imageUrl
                    ? `https://image.tmdb.org/t/p/original${imageUrl}`
                    : require("../assets/noPosterSmall.jpg").default} />
            <Name>* {name}</Name>
            <Character_name>- {character_name}</Character_name>
        </ImageContainer>
    </Container>


export default Poster;