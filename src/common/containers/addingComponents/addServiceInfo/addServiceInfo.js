import React, {Component} from 'react';
import { withFormik, Form, Field } from 'formik';
import {connect} from 'react-redux';
import './addServiceInfo.css';
import {onAddService, hideServiceInfo} from '../../../../features/ducks';
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
        <Field component="select" name='activity'>
            {serviceName}
        </Field>
        <label>Активность услуги: </label>
        <Field component="select" name='status '>
            <option value='Услуга включена'>Услуга включена</option>
            <option value='Услуга отключена'>Услуга отключена</option>
        </Field>
        <label>Дата подключения:</label>
        <Field type="text" name='startDate' placeholder='Введите дату подключения'></Field>
        <button type="submit" onClick={() => {onAddService(values); hideServiceInfo()}}>Добавить </button>
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
    mapPropsToValues() {
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