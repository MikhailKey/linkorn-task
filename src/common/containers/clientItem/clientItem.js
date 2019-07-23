import React from 'react';
import styled from 'styled-components';
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
const PInfo = styled.p`
display: inline-block
padding-bottom: 10px
#304f5c
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
const ClientItem = () => {
 return (
     <ClientWrap>
         <EditButton>Редактировать</EditButton>
         <ClientTitle>Клиент №1</ClientTitle><br/>
        <HFour>ФИО: </HFour><PInfo> Михаил Михаил</PInfo><br/>
        <HFour>Телефон: </HFour><PInfo>+7 937 220 10 96</PInfo><br/>
        <HFour>e-mail: </HFour><PInfo>Mamamia@mail.ru</PInfo><br/>
        <HFour>Город: </HFour><PInfo>Майами</PInfo><br/>
        <HFour>Количество объектов: </HFour><PInfo>1</PInfo><br/>
        </ClientWrap>
    
 )
}

export default ClientItem