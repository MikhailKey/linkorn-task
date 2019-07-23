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
border: 1px solid #8360c3;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
font-size: 16px

`
const SearchButton = styled.button`
flex-basis: 10%;
background: linear-gradient(90deg,#8360c3, #2ebf91);
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
background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
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