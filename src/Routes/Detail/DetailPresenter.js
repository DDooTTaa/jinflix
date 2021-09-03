import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DefaultPresenter = ({ result, error, loading }) => null;;

DefaultPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default DefaultPresenter;