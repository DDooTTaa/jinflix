import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
font-size: 18px;`;


const Image = styled.div<{bgUrl:string}>`
background-image: url(${props => props.bgUrl});
height: 240px;
width: 180px;
background-size: cover;
border-radius: 4px;
backgtound-position: center center;
transition: opacity 0.2s linear;
`;


const Rating = styled.span`
position: absolute;
bottom: 6px;
right: 5px;
opacity: 0;
transition: opacity 0.2s linear;
`;

const ImageContainer = styled.div`
margin-bottom: 5px;
position: relative;
        &: hover{
    ${Image} {
        opacity: 0.3;
    }
    ${Rating} {
        opacity: 1;
    }
}
`;

const Title = styled.span`
display: block;
margin-bottom: 3px;
`;

const Year = styled.span`
font - size: 10px;
color: rgba(255, 255, 255, 0.5);
`;

interface PosterProp {
    id: number | undefined,
    imageUrl: string,
    title: string,
    rating: number,
    year: string,
    isMovie: boolean
}
const Poster:React.FC<PosterProp> = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/noPosterSmall.jpg").default} />
                <Rating>
                    <span role="img" aria-label="rating">⭐
                    </span>{" "}
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title && title.length > 11 ? `${title.substring(0, 10)}...` : title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
)

export default Poster;