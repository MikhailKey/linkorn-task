import React, {Component} from 'react';
import styled from 'styled-components';
import ClientItem from '../clientItem';
import {connect} from 'react-redux';
import WithInfoService from '../../../features/hoc';
import {allClientsLoaded} from '../../../features/ducks';
//import Spinner from '../../components/spinner';
//import ErrorMessage from '../../components/errorMessage';

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
    }
    render() {
        const {allClients} = this.props;
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
    }
}
const mapDispatchToProps =  {
    allClientsLoaded,
};
export default WithInfoService()(connect(mapStateToProps, mapDispatchToProps)(MainContainer))