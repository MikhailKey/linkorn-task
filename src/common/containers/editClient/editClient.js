import React from 'react'
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
        height: 250px;
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
const EditClient = ({isOpened, editClosed}) => {
    let content = (
        <EditBg>
            <EditWrap>
                <EditHeader>
                <h2>Редактирование клиента</h2>
                <CloseButton onClick={() => editClosed()}>&times;</CloseButton>
                </EditHeader>
            </EditWrap>
        </EditBg>
    )
    if (!isOpened) {
        content=null;
    }
    return (
        <>
        {content}
        </>
    )
}
const mapStateToProps = (state) => {
    return {    
    isOpened: state.isOpened,
    }
}
const mapDispatchToProps = {
    editClosed,
}
export default connect(mapStateToProps, mapDispatchToProps)(EditClient);