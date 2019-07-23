import React, {Component} from 'react';
import styled from 'styled-components';
import ClientItem from '../clientItem';
import {connect} from 'react-redux';
import WithInfoService from '../../../features/hoc';
import {allClientsLoaded, allClientsError} from '../../../features/ducks';
import Spinner from '../../components/spinner';
import ErrorMessage from '../../components/errorMessage';

const MainWrap = styled.div`
margin-top: 20px;
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
        const {allClients, loading, error} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorMessage/>
        }
    return (
        <MainWrap>
            {
                allClients.map(client => {
                    return <ClientItem key={client.id} clientData={client}/>
                })
            }
        </MainWrap>
    )
    }
}
const mapStateToProps = (state) => {
    return {
        allClients: state.allClients,
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps =  {
    allClientsLoaded,
    allClientsError,
};
export default WithInfoService()(connect(mapStateToProps, mapDispatchToProps)(MainContainer))