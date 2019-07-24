import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addClosed, onAdd} from '../../../features/ducks';
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
const EditInput = styled.input`
width: 50%
height: 30px
padding-left: 10px
border: 1px solid #6dd5ed;
border-radius: 3px
`
const Hfour = styled.h4`

margin-top: 10px
`

class AddClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            town: '',
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onTownChange = this.onTownChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    onPhoneChange(e) {
        this.setState({
            phone: e.target.value
        })
    }
    onEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    onTownChange(e) {
        this.setState({
            town: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.phone,this.state.email, this.state.town);
        this.setState({
            name: '',
            phone: '',
            email: '',
            town: '',
        })
    }

    render() {
        const {addClosed, addIsOpened} = this.props;
        let content = (<EditBg>
            <EditWrap>
                <EditHeader>
                    <h2>Добавление клиента</h2>
                     <CloseButton onClick={() => addClosed()}>&times;</CloseButton>
                </EditHeader>
                <form onSubmit={this.onSubmit}>
                <Hfour>Имя:</Hfour>
                    <EditInput 
                    placeholder='Введите имя' 
                    onChange={this.onNameChange}        
                    value={this.state.name} required/>
                <Hfour>Телефон:</Hfour>
                    <EditInput 
                    placeholder='Введите телефон' 
                    onChange={this.onPhoneChange} 
                    value={this.state.phone} required/>
                <Hfour>E-mail:</Hfour>
                    <EditInput 
                    placeholder='Введите e-mail' 
                    onChange={this.onEmailChange} 
                    value={this.state.email} required/>
                <Hfour>Город:</Hfour>
                    <EditInput 
                    placeholder='Введите город' 
                    onChange={this.onTownChange} 
                    value={this.state.town} required/>
                <button type="submit">Отправить</button>
                </form>
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
    clientOnEdit: state.clientOnEdit,
    }
}
const mapDispatchToProps = {
    addClosed,
    onAdd,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddClient);