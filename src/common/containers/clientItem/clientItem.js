import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {editOpened} from '../../../features/ducks';
const ClientWrap = styled.div`
margin: 10px 0;
padding: 10px
background: #f2f2f2
border-radius: 5px
width: 100%
position: relative
`
const ClientTitle = styled.h3`
padding-bottom: 10px
`
const HFour = styled.h4`
display: inline-block
padding-bottom: 10px
color: #304f5c
`
const EditButton = styled.button`
position: absolute
left: 100%
transform: translateX(-105%);
background: linear-gradient(90deg,#8360c3, #2ebf91);
color: white;
border: none;
border-radius: 50px
padding: 10px 15px
font-size: 17px
cursor: pointer
outline: none
transition: 0.2s
&:hover {
    color: #f5a76e
  }
`
const ClientItem = ({clientData, editOpened}) => {
    const {id, name, town, phone, email, objects} = clientData;
    const onObjects = objects.map(object => object.status === "действует")
 return (
     <ClientWrap>
         <EditButton onClick={() => editOpened()}>Редактировать</EditButton>
         <ClientTitle>Клиент №{id}</ClientTitle><br/>
        <HFour>ФИО: {name}</HFour><br/>
        <HFour>Телефон: {phone}</HFour><br/>
        <HFour>e-mail: {email}</HFour><br/>
        <HFour>Город: {town}</HFour><br/>
        <HFour>Количество не отключенных объектов: {onObjects.length}</HFour><br/>
        </ClientWrap>
    
 )
}
const mapStateToProps = (state) => {
  return {
      isOpened: state.isOpened
  }
}
const mapDispatchToProps =  {
  editOpened
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientItem);