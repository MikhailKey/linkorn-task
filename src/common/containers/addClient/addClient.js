import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addClosed, onAdd} from '../../../features/ducks';
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
`

class AddClient extends Component {
    render() {
        const {
            addClosed, 
            addIsOpened,
            onAdd,
            values
                        } = this.props;
        let content = (<EditBg>
            <EditWrap>
                <EditHeader>
                    <h2>Добавление клиента</h2>
                     <CloseButton onClick={() => addClosed()}>&times;</CloseButton>
                </EditHeader>
                <Form>
                <Hfour>Имя:</Hfour>
                    <Field type='text' name='name' placeholder='Введите Ваше имя'/>
                <Hfour>Телефон:</Hfour>
                    <Field type='text' name='phone' placeholder='Введите Ваш телефон'/>
                <Hfour>E-mail:</Hfour>
                    <Field type='text' name='email' placeholder='Введите Ваш e-mail'/>
                <Hfour>Town:</Hfour>
                    <Field type='text' name='town' placeholder='Введите Ваш город'/>
                <button type="submit" onClick={() => onAdd(values)}>Отправить</button>
                </Form>
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
    }
}
const mapDispatchToProps = {
    addClosed,
    onAdd,
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