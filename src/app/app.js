import React from 'react';
import styled from 'styled-components';
import './app.css'
import SearchPanel from '../common/containers/searchPanel';
import MainContainer from '../common/containers/mainContainer';
const Container = styled.div `
width: 1170px;
margin: auto;
font-family: 'Roboto', sans-serif;
box-sizing: border-box
`
const App = () => {
    return (
        <Container>
            <SearchPanel/>
            <MainContainer/>
        </Container>
    )
}
export default App