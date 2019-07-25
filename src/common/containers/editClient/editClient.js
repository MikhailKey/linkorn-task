import React, {Component} from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import {editClosed, onEdit} from '../../../features/ducks';
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
margin-bottom: 5px
`
const BtnWrap = styled.div`
display: flex
flex-direction: column
width: 10%
`

class EditClient extends Component  {
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
    componentDidMount() {
        this.setState({
            name: this.props.clientOnEdit.name,
            phone: this.props.clientOnEdit.phone,
            email: this.props.clientOnEdit.email,
            town: this.props.clientOnEdit.town,
        })
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
        const id = this.props.clientOnEdit.id;
        this.props.onEdit(id, this.state);
        this.setState({
            name: '',
            phone: '',
            email: '',
            town: '',
        })
    }
    render() {
    
    const {editIsOpened, editClosed, clientOnEdit} = this.props;
    const {id, name, email, town, phone} = clientOnEdit;
    let content = (
        <EditBg>
            <EditWrap>
                <EditHeader>
                    <h2>Редактирование клиента №{id}</h2>
                     <CloseButton onClick={() => editClosed()}>&times;</CloseButton>
                </EditHeader>
                <form onSubmit={this.onSubmit}>
                <Hfour>Имя:</Hfour>
                    <EditInput 
                    onChange={this.onNameChange} 
                    defaultValue={name}                    
                    required/>
                 <Hfour>Телефон:</Hfour>
                    <EditInput 
                    onChange={this.onPhoneChange} 
                    defaultValue={phone}
                    required/>
                <Hfour>E-mail:</Hfour>
                    <EditInput 
                    onChange={this.onEmailChange} 
                    defaultValue={email}
                    required/>
                <Hfour>Город:</Hfour>
                    <EditInput 
                    onChange={this.onTownChange} 
                    defaultValue={town}
                    required/>
                {/*<Hfour>Объекты: </Hfour>
                    <p>{{objects}.length}</p>*/}
                <BtnWrap>
                <button type="submit">Сохранить</button>
                <button onClick={() => editClosed()}>Закрыть</button>
                </BtnWrap>
                </form>
            </EditWrap>
        </EditBg>
    )
    if (!editIsOpened) {
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
    editIsOpened: state.editIsOpened,
    clientOnEdit: state.clientOnEdit,
    }
}
const mapDispatchToProps = {
    editClosed,
    onEdit,
}
export default connect(mapStateToProps, mapDispatchToProps)(EditClient);