import React, {Component} from 'react';
import styled from 'styled-components';
import ClientItem from '../clientItem';
import {connect} from 'react-redux';
import WithInfoService from '../../../features/hoc';
import {allClientsLoaded, allClientsError} from '../../../features/ducks';
import Spinner from '../../components/spinner';
import ErrorMessage from '../../components/errorMessage';

const MainWrap = styled.div`
margin: 20px 0;
display: flex;
flex-direction: column
padding: 15px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
border-radius: 5px
`

class MainContainer extends Component {
    componentDidMount() {
        const {InfoService} = this.props;
        InfoService.getAllClients()
        .then(res => this.props.allClientsLoaded(res))
        .catch(res => this.props.allTasksError(res))
    }
    render() {
        const {allClients, filteredClients, loading, error} = this.props;
        let clients = {};
        if (filteredClients.length === 0) {
            clients = allClients.map(client => {
                return <ClientItem key={client.id} clientData={client}/>
            })
        } else { clients = filteredClients.map(client => {
            return <ClientItem key={client.id} clientData={client}/>
        })
        }
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorMessage/>
        }
        const content = loading ? <Spinner/> : clients;
    return (
        <MainWrap>
            {content}
        </MainWrap>
    )
    }
}
const mapStateToProps = (state) => {
    return {
        allClients: state.allClients,
        filteredClients: state.filteredClients,
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps =  {
    allClientsLoaded,
    allClientsError,
};
export default WithInfoService()(connect(mapStateToProps, mapDispatchToProps)(MainContainer))