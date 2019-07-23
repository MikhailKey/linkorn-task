import React from 'react';
import styled from 'styled-components';
import './app.css'
import SearchPanel from '../common/containers/searchPanel';
import MainContainer from '../common/containers/mainContainer';
import EditClient from '../common/containers/editClient';
const Container = styled.div `
width: 1170px;
margin: auto;
box-sizing: border-box
`
const App = () => {
    return (
        <>
        <EditClient/>
        <Container>
            <SearchPanel/>
            <MainContainer/>
        </Container>
        </>
    )
}
export default App