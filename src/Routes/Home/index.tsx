import React, { useEffect, useState } from "react";
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
    const [nowPlaying, setNowPlaying] = useState<any>([]);
    const [upComing, setUpComing] = useState<any>([]);
    const [popular, setPopular] = useState<any>([]);
    const [error] = useState<string>("");
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
                        {nowPlaying.map((movie: { id: number; poster_path: string; title: string; vote_average: number; release_date: string; }) => (
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
                        {upComing.map((movie: { id: number; poster_path: string; title: string; vote_average: number; release_date: string; }) => (
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
                        {popular.map((movie: { id: number; poster_path: string; title: string; vote_average: number; release_date: string; }) => (
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


export default HomePresenter;
