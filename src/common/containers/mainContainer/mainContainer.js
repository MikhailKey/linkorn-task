import React from 'react';
import styled from 'styled-components';
import ClientItem from '../clientItem';
const MainWrap = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column
padding: 15px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
border-radius: 5px
`
const MainContainer = () => {
    return (
        <MainWrap>
            <ClientItem/>
            <ClientItem/>
        </MainWrap>
    )
}
export default MainContainer