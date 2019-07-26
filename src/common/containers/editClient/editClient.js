import React, {Component} from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
//import ObjectsList from '../objectsList';
import {editClosed, onEdit} from '../../../features/ducks';
import { withFormik, Form, Field } from 'formik';
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
const Hfour = styled.h4`

margin-top: 10px
margin-bottom: 5px
`
const BtnWrap = styled.div`
display: flex
flex-direction: column
width: 10%
`  

class EditClient extends Component  {
    render() {
    const {
        editIsOpened, 
        editClosed, 
        clientOnEdit,
        onEdit,
        values
    } = this.props;
    const {id, services} = clientOnEdit;
    //const servicesContent = services.map(object => <ObjectsList key={object.contractNumber} servicesData={services}/>)
    let content = (
        <EditBg>
            <EditWrap>
                <EditHeader>
                    <h2>Редактирование клиента №{id}</h2>
                     <CloseButton onClick={() => editClosed()}>&times;</CloseButton>
                </EditHeader>
                <Form>
                <Hfour>Имя:</Hfour>
                    <Field className="editInput" type='text' name='name'/> 
                 <Hfour>Телефон:</Hfour>
                    <Field className="editInput" type='text' name='phone'/> 
                <Hfour>E-mail:</Hfour>
                    <Field className="editInput" type='text' name='email'/> 
                <Hfour>Город:</Hfour>
                    <Field className="editInput" type='text' name='town'/>   
                <BtnWrap>
                <button type="submit" onClick={() => onEdit(id, values)}>Сохранить</button>
                <button onClick={() => editClosed()}>Закрыть</button>
                </BtnWrap>
                
                </Form>
                
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
    onEdit,
}
const formikEditClient = withFormik({
    mapPropsToValues(clientOnEdit) {
        return {
            name: clientOnEdit.name || '',
            phone: clientOnEdit.phone || '',
            email: clientOnEdit.email || '',
            town: clientOnEdit.town || '',
        }
    },
    handleSubmit(values) {}
})(EditClient)
export default connect(mapStateToProps, mapDispatchToProps)(formikEditClient);