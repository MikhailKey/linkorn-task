import React, {Component} from 'react';
import { withFormik, Form, Field } from 'formik';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {onAddObject, hideService, showServiceInfo, hideServiceInfo, onTypeSelected} from '../../../../features/ducks'
import './addService.css'
const ServicesButton = styled.button`
background: none;
border: 1px solid blue;
padding: 5px 10px;
border-radius: 2px;
cursor: pointer;
width: 50%
`
class AddService extends Component {
    render() {
        const {showServiceInfo, 
            hideServiceInfo, 
            onAddObject, 
            values, 
            addServiceIsOpened, 
            addServiceInfoIsOpened, 
            clientServices,
            onTypeSelected,
            hideService} = this.props;
            const servicesType = clientServices.map(service => {if (service === false) {return `добавьте объект обслуживания`}
            else {
               return `${service.name}, `
           }})
        let serviceInfoButton = '';
        if (!addServiceInfoIsOpened) {
            serviceInfoButton=(<ServicesButton type="button" onClick={() => showServiceInfo()}>Добавить услугу</ServicesButton>)
        } else {
            serviceInfoButton = (<ServicesButton type="button" onClick={() => hideServiceInfo()}>Скрыть услугу</ServicesButton>)
        }
        let content = (
            <>
            <Form className='addServiceForm'>
            <label>Тип объекта:</label>
            <Field className="editInputService" component="select" name='type' onClick={() => onTypeSelected(values.type)}>
                <option value='авто'>авто</option>
                <option value='недвижимость'>недвижимость</option>
            </Field>
            <label>№ договора: </label>
            <Field className="editInputService" type="text" name='contractNumber'></Field>
            <label>Статус объекта: </label>
            <Field className="editInputService" component="select" name='status '>
                <option value='действует'>действует</option>
                <option value='не действует'>не действует</option>
            </Field>
            <label>Дата подключения:</label>
            <Field className="editInputService" type="text" name='startDate' placeholder='Введите дату подключения'></Field>
            <label>Дата окончания действия:</label>
            <Field className="editInputService" type="text" name='finishDate' placeholder='Введите дату окончания действия'></Field>
            <h4>Дополнительные услуги: {servicesType}</h4>
            {serviceInfoButton}
            <button  className="mainButton" type="submit" onClick={() => {onAddObject(values); hideService()}}>Добавить объект</button>
            </Form>
            
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
    clientServices: state.clientServices,
    }
}
const mapDispatchToProps = {
    onAddObject,
    onTypeSelected,
    hideService,
    showServiceInfo,
    hideServiceInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormikAddService);