import React from 'react';
//import './errorMessage.css'
import styled from 'styled-components';
import img from './error.png';

const ErrorImage = styled.img`
width: 50px;
height: auto;
margin-right: 40px;
`
const ErrorMessage = () => {
    return (
        <>
        <ErrorImage src={img} alt="error"></ErrorImage>
        <span>Something went wrong...</span>
        </>
    )
}

export default ErrorMessage;