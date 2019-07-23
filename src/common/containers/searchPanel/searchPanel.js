import React from 'react'
import styled from 'styled-components';
const SearchWrap = styled.div`
padding-top: 50px
display: flex;
flex-wrap: wrap;
`
const SearchLine = styled.input`
flex-basis: 80%;
padding-left: 20px;
border: 1px solid #6dd5ed;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
font-size: 16px

`
const SearchButton = styled.button`
flex-basis: 10%;
background: linear-gradient(to left, #2193b0, #6dd5ed);
color: white;
border: none;
font-size: 17px
height: 35px
cursor: pointer
outline: none
transition: 0.2s
&:hover {
    color: #f5a76e
  }
`
const AddButton = styled.button`
flex-basis: 10%;  
background: linear-gradient(to right, #2193b0, #6dd5ed);
color: white;
border: none;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
font-size: 17px
height: 35px
cursor: pointer
outline: none
transition: 0.2s
&:hover {
    color: #f5a76e
  }
`
const SearchPanel = () => {
    return (
        <SearchWrap>
            <SearchLine placeholder='введите нужный раздел'></SearchLine>
            <SearchButton>Найти</SearchButton>
            <AddButton>Добавить</AddButton>
        </SearchWrap>
    )
}
export default SearchPanel