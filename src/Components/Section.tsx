import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    :not(:last-child){
margin-bottom: 50px;
    }`;

const Title = styled.span`
font-size: 18px;
font-weight: 600;
`;

const Grid = styled.div`
margin-top: 25px;
display: grid;
grid-template-columns:repeat(auto-fill, 190px);
grid-gap: 25px;
`;

interface sectionType {
    title: string,
    children: string
}

const Section:React.FC<sectionType> = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);


export default Section;