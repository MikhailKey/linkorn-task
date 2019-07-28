import React, {Component} from 'react';
import { withFormik, Form, Field } from 'formik';
import {connect} from 'react-redux';
import './addServiceInfo.css';
import styled from 'styled-components';
import {onAddService, hideServiceInfo} from '../../../../features/ducks';
const AddButton = styled.button`
background: #32bf84;
color: white;
border: none;
padding: 5px 10px;
border-radius: 2px;
cursor: pointer;
width: 70%
`
class AddServiceInfo extends Component {
    render() {
        const {typeOfObject, onAddService, addServiceInfoIsOpened, values, hideServiceInfo} = this.props;
        let serviceName = '';
        if (typeOfObject === 'авто') {
            serviceName = (
                <>
                <option value='отслеживание автомобиля'>отслеживание автомобиля</option>
                <option value='датчик объема топливного бака'>датчик объема топливного бака</option>
                <option value='датчик пробега'>датчик пробега</option>
                </>
            )
        } else {
            serviceName = (
                <>
                <option value='охрана'>охрана</option>
                <option value='видеонаблюдение'>видеонаблюдение</option>
                <option value='датчик воды'>датчик воды</option>
                <option value='датчик дыма'>датчик дыма</option>
                </>)
        }
        let content = ( 
        <Form className='addServiceInfoForm'>
        <label>Наименование услуги:</label>
        <Field className="editInputService" component="select" name='name'>
            {serviceName}
        </Field>
        <label>Активность услуги: </label>
        <Field className="editInputService" component="select" name='activity'>
            <option value='Услуга включена'>Услуга включена</option>
            <option value='Услуга отключена'>Услуга отключена</option>
        </Field>
        <label>Дата подключения:</label>
        <Field className="editInputService" type="text" name='startDate' placeholder='Введите дату подключения'></Field>
        <AddButton type="submit" onClick={() => {onAddService(values); hideServiceInfo()}}>Добавить </AddButton>
        </Form>)
        
        if (!addServiceInfoIsOpened) {
            content=null;
        }
        return (
            <>
            {content}
            </>
        )    
    }
    }
const AddingServiceInfo = withFormik({
    mapPropsToValues(typeOfObject) {
        /*let name = '';
        if (typeOfObject === 'авто') {name = 'отслеживание автомобиля'} else if (typeOfObject === 'недвижимость') {
            name = 'охрана'
        } else {name = 'отслеживание автомобиля'};*/
        return {
            name: 'отслеживание автомобиля',
            activity: 'Услуга включена',
            startDate: '',
        }
    },
    handleSubmit(values) {
        console.log(values);
    }
})(AddServiceInfo)
const mapStateToProps = (state) => {
    return {    
        addServiceInfoIsOpened: state.addServiceInfoIsOpened,
        typeOfObject: state.typeOfObject,
    }
}
const mapDispatchToProps = {
    onAddService,
    hideServiceInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(AddingServiceInfo);