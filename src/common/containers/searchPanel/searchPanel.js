import React, {Component} from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import {clientsFiltered} from '../../../features/ducks';
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
font-size: 17px;
height: 35px;
outline: none;
cursor: pointer;
transition: 0.2s;
&:hover {
    color: #f5a76e;
  }
`
const AddButton = styled.button`
cursor: pointer
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
class SearchPanel extends Component {
  render() {
    const {clientsFiltered} = this.props;
    let text='';
    const onTextAdded = (e) => {
      return text = e.target.value;
    }
    return (
        <SearchWrap>
            <SearchLine type="text" onChange={(e) => onTextAdded(e)} placeholder='введите нужный раздел'></SearchLine>
            <SearchButton type='submit' onClick={() => clientsFiltered(text)}>Найти</SearchButton>
            <AddButton >Добавить</AddButton>
        </SearchWrap>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      allClients: state.allClients,
      loading: state.loading,
      error: state.error
  }
}
const mapDispatchToProps =  {
  clientsFiltered
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);