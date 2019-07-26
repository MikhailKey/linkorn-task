import React, {Component} from 'react';
import { withFormik, Form, Field } from 'formik';
import {connect} from 'react-redux';
import AddServiceInfo from '../addServiceInfo';
import {onAddObject, hideService, showServiceInfo, hideServiceInfo} from '../../../../features/ducks'
import './addService.css'
class AddService extends Component {
    render() {
        const {showServiceInfo, hideServiceInfo, onAddObject, values, addServiceIsOpened, addServiceInfoIsOpened, hideService} = this.props;
        let serviceInfoButton = '';
        if (!addServiceInfoIsOpened) {
            serviceInfoButton=(<button onClick={() => showServiceInfo()}>Добавить услугу</button>)
        } else {
            serviceInfoButton = (<button onClick={() => hideServiceInfo()}>Скрыть услугу</button>)
        }
        let content = (
            <>
            <Form className='addServiceForm'>
            <label>Тип объекта:</label>
            <Field component="select" name='type'>
                <option value='авто'>авто</option>
                <option value='недвижимость'>недвижимость</option>
            </Field>
            <label>№ договора: </label>
            <Field type="text" name='contractNumber'></Field>
            <label>Статус объекта: </label>
            <Field component="select" name='status '>
                <option value='действует'>действует</option>
                <option value='не действует'>не действует</option>
            </Field>
            <label>Дата подключения:</label>
            <Field type="text" name='startDate' placeholder='Введите дату подключения'></Field>
            <label>Дата окончания действия:</label>
            <Field type="text" name='finishDate' placeholder='Введите дату окончания действия'></Field>
            <h4>Дополнительные услуги: </h4>
            {serviceInfoButton}
            </Form>
            <AddServiceInfo/>
            <button  className="mainButton" type="submit" onClick={() => {onAddObject(values); hideService()}}>Добавить объект</button>
           </>
        )
        if (!addServiceIsOpened) {
            content=null;
        }
        return (
            <>
            {content}
            </>
        )
            }
    }
const FormikAddService = withFormik({
    mapPropsToValues() {
        return {
            type: 'авто',
            contractNumber: '',
            status: 'действует',
            startDate: '',
            finishDate: '',
        }
    },
    handleSubmit(values) {
        console.log(values);
    }
})(AddService)
const mapStateToProps = (state) => {
    return {    
    addIsOpened: state.addIsOpened,
    addServiceIsOpened: state.addServiceIsOpened,
    addServiceInfoIsOpened: state.addServiceInfoIsOpened,
    }
}
const mapDispatchToProps = {
    onAddObject,
    hideService,
    showServiceInfo,
    hideServiceInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormikAddService);