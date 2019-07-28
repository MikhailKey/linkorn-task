import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import FormikAddService from '../addService';
import {addClosed, onAdd, showService, hideService} from '../../../../features/ducks';
import { withFormik, Form, Field } from 'formik';

import AddServiceInfo from '../addServiceInfo';
import './addClient.css'
const EditBg = styled.div`
z-index: 99
width: 100%;
height: 2000px;
overflow: hidden;
position: fixed;
background: rgba(0, 0, 0, 0.5);

`
const AddButton = styled.button`
background: #32bf84;
color: white;
border: none;
padding: 5px 10px;
border-radius: 2px;
cursor: pointer;
`
const ServicesButton = styled.button`
background: none;
border: 1px solid blue;
padding: 5px 10px;
border-radius: 2px;
cursor: pointer;
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
`

class AddClient extends Component {
    render() {
        const {
            clientObjects,
            addClosed, 
            addIsOpened,
            onAdd,
            values,
            showService,
            hideService,
            addServiceIsOpened,
                        } = this.props;
        const objectsType = clientObjects.map(service => {if (service=== false) {return `добавьте объект обслуживания`}
         else {
            return `${service.type}, `
        }})
        let serviceButton = '';
        if (!addServiceIsOpened) {
            serviceButton=(<ServicesButton onClick={() => showService()}>Добавить объект обслуживания</ServicesButton>)
        } else {
            serviceButton = (<ServicesButton onClick={() => hideService()}>Скрыть объект обслуживания</ServicesButton>)
        }
        let content = (<EditBg>
            <EditWrap>
                <EditHeader>
                    <h2>Добавление клиента</h2>
                     <CloseButton onClick={() => addClosed()}>&times;</CloseButton>
                </EditHeader>
                <Form>
                <Hfour>Имя:</Hfour>
                    <Field className="editInput" type='text' name='name' placeholder='Введите Ваше имя'/>
                <Hfour>Телефон:</Hfour>
                    <Field className="editInput" type='text' name='phone' placeholder='Введите Ваш телефон'/>
                <Hfour>E-mail:</Hfour>
                    <Field className="editInput" type='text' name='email' placeholder='Введите Ваш e-mail'/>
                <Hfour>Town:</Hfour>
                    <Field className="editInput" type='text' name='town' placeholder='Введите Ваш город'/>
                <AddButton type="submit" onClick={() => onAdd(values)}>Отправить</AddButton>
                </Form>
                <p>Объекты обслуживания: {objectsType} </p>
                {serviceButton}
                <div className="flex-service">
                <FormikAddService/>
                <AddServiceInfo/>
                </div>
            </EditWrap>
        </EditBg>
        )
        if (!addIsOpened) {
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
    addIsOpened: state.addIsOpened,
    addServiceIsOpened: state.addServiceIsOpened,
    clientObjects: state.clientObjects,
    }
}
const mapDispatchToProps = {
    addClosed,
    onAdd,
    showService,
    hideService
}
const formikAddClient = withFormik({
    mapPropsToValues() {
        return {
            name: '',
            phone: '',
            email: '',
            town: '',
        }
    },
    handleSubmit(values) {
        console.log(values);
    }
})(AddClient)
export default connect(mapStateToProps, mapDispatchToProps)(formikAddClient);