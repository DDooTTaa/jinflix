import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
padding: 20px;`;

const Form = styled.form`
margin-bottom: 50px;`;

const Input = styled.input`
all: unset;
font-size: 28px;
width:100%;`;

const searchPresenter = ({ movieResults, tvResults, searchTerm, error, loading, handlesubmit, updateTerm }) =>
    <Container>
        <Helmet>
            <title>Search | JinFlix</title>
        </Helmet>
        <Form onSubmit={handlesubmit}>
            <Input placeholder="Search Movie or TV show..." type="text" value={searchTerm}
                onChange={updateTerm}>
            </Input>
        </Form>
        {loading ? <Loader /> : <>
            {movieResults && movieResults.length > 0 && (
                <Section title="Movie Results">
                    {movieResults.map(movie => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.original_title}
                            rating={movie.vote_average}
                            isMovie={true}
                            year={movie.release_date}
                        // year={movie.release_date.substring(0,4)}
                        />
                    ))}
                </Section>
            )}
            {tvResults && tvResults.length > 0 && (
                <Section title="tv Results">
                    {tvResults.map(show => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date}
                        // year={movie.release_date.substring(0,4)}
                        />
                    ))}
                </Section>
            )}
        </>}
        {error && <Message color="#e74c3c" text={error} />}
        {tvResults &&
            movieResults &&
            tvResults.length === 0 &&
            movieResults.length === 0 && (
                <Message text={`Nothing Found for: ${searchTerm}`} color="#e74c3c" />
            )}
    </Container>

searchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handlesubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default searchPresenter;