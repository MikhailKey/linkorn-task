import React, {Component} from 'react';
//import styled from 'styled-components';

export default class ObjectsList extends Component {
    render() {
        const {servicesData} = this.props;
        const {type, contractNumber, status, startDate, finishDate, services} = servicesData;
        const servicesList = services.map(service => {
            return (
                <>
            <p>Название: {service.name}</p>
            <p>Дата подключения: {service.startDate}</p>
            <p>Активность: {service.activity}</p>
            </>
            )
        })
        return (
            <>
            <p>тип объекта: {type}</p>
            <p>№ договора: {contractNumber}</p>
            <p>Статус: {status}</p>
            <p>Дата подключения: {startDate}</p>
            <p>Дата, до которой действует договор: {finishDate}</p>
            <p>Список подключенных услуг:</p>
            {servicesList}
            </>
        )
    }
}