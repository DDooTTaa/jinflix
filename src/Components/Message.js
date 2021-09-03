import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
width: 100vw;
display: flex;
justify-content: center;
padding-top: 50px;
`;

const Text = styled.span`
color: ${props => props.color};
font-weight: 600;
font-size: 24px;
`;

const Message = ({ text, color }) => (
    <Container>
        <Text color={color}>{text}
        </Text>
    </Container>
);

Message.propTypes = {
    text: PropTypes.string.isRequired
}

export default Message;