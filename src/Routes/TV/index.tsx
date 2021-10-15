import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import { tvApi } from "../../api";

const Container = styled.div`
padding: 20px;`;

const TVPresenter = () => {
    const [topRated, setTopRated] = useState<any>();
    const [airingToday, setAringToday] = useState<any>();
    const [popular, setPopular] = useState<any>();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const getTvDataFromApi = async () => {
        try {
            const {
                data: { results: topRated },
            } = await tvApi.topRated();

            const {
                data: { results: airingToday },
            } = await tvApi.airingToday();

            const {
                data: { results: popular },
            } = await tvApi.popular();
            setTopRated(topRated);
            setAringToday(airingToday);
            setPopular(popular);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { getTvDataFromApi() }, []);


    return (loading ? <Loader /> :
        <Container>
            <Helmet>
                <title>TV | JinFlix</title>
            </Helmet>
            {topRated && topRated.length > 0
                && <Section title="Top Rated">
                    {topRated.map((show: { id:number; poster_path: string; name: string; vote_average: number; first_air_date: string; }) => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.name}
                            rating={show.vote_average}
                            year={show.first_air_date} 
                            isMovie={false}                        // year={movie.release_date.substring(0,4)}
                        />
                    ))}
                </Section>
            }
            {popular && popular.length > 0
                && <Section title="Popular">
                    {popular.map((show: { id: number; poster_path: string; name: string; vote_average: number; first_air_date: string; }) => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.name}
                            rating={show.vote_average}
                            year={show.first_air_date} 
                            isMovie={false}                       
                             // year={movie.release_date.substring(0,4)}
                        />
                    ))}
                </Section>
            }
            {airingToday && airingToday.length > 0
                && <Section title="Airing Today">
                    {airingToday.map((show: { id: number; poster_path: string; name: string; vote_average: number; first_air_date: string; }) => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.name}
                            rating={show.vote_average}
                            year={show.first_air_date} 
                            isMovie={false}                       
                             // year={movie.release_date.substring(0,4)}
                        />
                    ))}
                </Section>
            }
            {error && <Message color="#e74c3c" text={error} />}
        </Container>
    );
}

export default TVPresenter;