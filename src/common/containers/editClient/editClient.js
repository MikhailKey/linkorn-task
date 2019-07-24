import React, {Component} from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import {editClosed} from '../../../features/ducks';
const EditBg = styled.div`
z-index: 99
width: 100%;
height: 2000px;
overflow: hidden;
position: fixed;
background: rgba(0, 0, 0, 0.5);

`
const EditHeader = styled.div`
display: flex;
justify-content: space-between;
`
const EditWrap = styled.div`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 1170px;
        background: white;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 5px 10px rgba(43, 38, 38, 0.2);
`
const CloseButton = styled.button`
        outline: none;
        padding: 0;
        background: none;
        cursor: pointer;
        border: none;
        font-size: 25px;
        transition: 0.3s;
        &:hover {
            transform: scale(1.2);
            color: red;
        }
`
const EditInput = styled.input`
width: 50%
height: 30px
padding-left: 10px
border: 1px solid #6dd5ed;
border-radius: 3px
`
const Hfour = styled.h4`

margin-top: 10px
margin-bottom: 5px
`
class EditClient extends Component  {
    render() {
    const {editIsOpened, editClosed, clientOnEdit} = this.props;
    const {id, name, town, phone, email, objects} = clientOnEdit;
    let content = (
        <EditBg>
            <EditWrap>
                <EditHeader>
                    <h2>Редактирование клиента №{id}</h2>
                     <CloseButton onClick={() => editClosed()}>&times;</CloseButton>
                </EditHeader>
                <form>
                <Hfour>Имя:</Hfour>
                    <EditInput value={name}/>
               {/*  <Hfour>Телефон:</Hfour>
                    <EditInput value={phone}/>
                <Hfour>E-mail:</Hfour>
                    <EditInput value={email}/>
                <Hfour>Город:</Hfour>
                    <EditInput value={town}/>
                <Hfour>Объекты: </Hfour>
                    <p>{{objects}.length}</p>*/}
                </form>
            </EditWrap>
        </EditBg>
    )
    if (!editIsOpened) {
        content=null;
    }
    return (
        <>
        {content}
        </>
    )
    }
}
const mapStateToProps = (state) => {
    return {    
    editIsOpened: state.editIsOpened,
    clientOnEdit: state.clientOnEdit,
    }
}
const mapDispatchToProps = {
    editClosed,
}
export default connect(mapStateToProps, mapDispatchToProps)(EditClient);