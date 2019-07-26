import React, {Component} from 'react';
import { withFormik, Form, Field } from 'formik';
import {connect} from 'react-redux';
import './addServiceInfo.css';
import {onAddService} from '../../../../features/ducks';
class AddServiceInfo extends Component {
    render() {
        const {onAddService, addServiceInfoIsOpened, values} = this.props;
        let content = ( 
        <Form className='addServiceInfoForm'>
        <label>Наименование услуги:</label>
        <Field component="select" name='activity'>
            <option value='отслеживание автомобиля'>отслеживание автомобиля</option>
            <option value='датчик объема топливного бака'>датчик объема топливного бака</option>
            <option value='датчик пробега'>датчик пробега</option>
        </Field>
        <label>Активность услуги: </label>
        <Field component="select" name='status '>
            <option value='Услуга включена'>Услуга включена</option>
            <option value='Услуга отключена'>Услуга отключена</option>
        </Field>
        <label>Дата подключения:</label>
        <Field type="text" name='startDate' placeholder='Введите дату подключения'></Field>
        <button type="submit" onClick={() => onAddService(values)}>Добавить </button>
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
        addServiceInfoIsOpened: state.addServiceInfoIsOpened
    }
}
const mapDispatchToProps = {
    onAddService,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddingServiceInfo);