import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
padding: 0px 20px;`;

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
    loading ? <Loader /> : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {nowPlaying.map(movie =>
                        (<sapn key={movie.id}>{movie.title}</sapn>))}
                </Section>)}
            {upComing && upComing.length > 0 && (
                <Section title="UpComing Movies">
                    {upComing.map(movie =>
                        (<sapn key={movie.id}>{movie.title}</sapn>))}
                </Section>)}
            {popular && popular.length > 0 && (
                <Section title="Popular Movies">
                    {popular.map(movie =>
                        (<sapn key={movie.id}>{movie.title}</sapn>))}
                </Section>)}
            {error && <Message color="#e74c3c" text={error} />}
        </Container>
    )
HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upComing: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default HomePresenter;