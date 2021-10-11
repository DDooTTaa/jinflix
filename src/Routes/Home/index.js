import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import { moviesApi } from "../../api";

const Container = styled.div`
padding: 20px;`;

const HomePresenter = () => {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [upComing, setUpComing] = useState([]);
    const [popular, setPopular] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const getMovieDataFromApi = async () => {
        try {
            const {
                data: { results: nowPlaying },
            } = await moviesApi.nowPlaying();

            const {
                data: { results: upcoming },
            } = await moviesApi.upComing();

            const {
                data: { results: popular },
            } = await moviesApi.popular();
            setNowPlaying(nowPlaying);
            setUpComing(upcoming);
            setPopular(popular);
        } catch (error) {
            setError("Cant find data", error);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getMovieDataFromApi();
    }, []);

    return (
        loading ? <Loader /> : (
            <Container>
                <Helmet>
                    <title>Movies | JinFlix</title>
                </Helmet>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title="Now Playing">
                        {nowPlaying.map(movie => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                imageUrl={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                isMovie={true}
                                year={movie.release_date}
                            // year={movie.release_date.substring(0,4)}
                            />
                        ))}
                    </Section>)}
                {upComing && upComing.length > 0 && (
                    <Section title="UpComing Movies">
                        {upComing.map(movie => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                imageUrl={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                isMovie={true}
                                year={movie.release_date}
                            // year={movie.release_date.substring(0,4)}
                            />
                        ))}
                    </Section>)}
                {popular && popular.length > 0 && (
                    <Section title="Popular Movies">
                        {popular.map(movie => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                imageUrl={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                isMovie={true}
                                year={movie.release_date}
                            // year={movie.release_date.substring(0,4)}
                            />
                        ))}
                    </Section>)}
                {error && <Message color="#e74c3c" text={error} />}
            </Container>
        )
    );
};


HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upComing: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default HomePresenter;