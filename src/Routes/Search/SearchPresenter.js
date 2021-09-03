import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";

const Container = styled.div`
padding: 0px 20px;`;

const Form = styled.form`
margin-bottom: 50px;`;

const Input = styled.input`
all: unset;
font-size: 28px;
width:100%;`;

const searchPresenter = ({ movieResults, tvResults, searchTerm, error, loading, handlesubmit, updateTerm }) =>
    <Container>
        <Form onSubmit={handlesubmit}>
            <Input placeholder="Search Movie or TV show..." type="text" value={searchTerm}
                onChange={updateTerm}>
            </Input>
        </Form>
        {loading ? <Loader /> : <>
            {movieResults && movieResults.length > 0 && (
                <Section title="Movie Results">
                    {movieResults.map(movie => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {tvResults && tvResults.length > 0 && (
                <Section title="tv Results">
                    {tvResults.map(show => (
                        <span key={show.id}>{show.name}</span>
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