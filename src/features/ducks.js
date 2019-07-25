const initialState = {
    allClients: [],
    loading: true,
    error: false,
    filteredClients: [], 
    editIsOpened: false,
    addIsOpened: false,
    clientOnEdit: [],
    newClient: [],
    clientId: 3,
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ALL_CLIENTS_LOADED':
            return {
                ...state,
                loading: false,
                allClients: action.payload,
            }
        case 'ALL_CLIENTS_ERROR':
            return {
                ...state,
                loading: false,
                allTasks: state.allTasks,
                error: true,
            };
        case 'CLIENTS_FILTERED':
           
            const searchValue = action.payload;
            /*let items={};
            for (let i=0; i<state.allClients.length; i++) {
                if (state.allClients[i].toLowerCase().includes(searchValue.toLowerCase())) {
                    return items+=state.allClients[i];
                }
            }*/
            let items = state.allClients.filter((item) => {
                if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    return item;
                } else if (item.town.toLowerCase().includes(searchValue.toLowerCase())) {
                    return item; 
                } else if (item.phone.toLowerCase().includes(searchValue.toLowerCase())) {
                    return item; 
                } else if (item.email.toLowerCase().includes(searchValue.toLowerCase())) {
                    return item; 
                } else return null;
                
            });
            /*let items = state.allClients.filter(item => {
                for (let key in item) {
                    if (item[key].includes(searchValue)) {
                        return item[key].includes(searchValue)
                    } 
                }
            })*/
            return {
                ...state,
                filteredClients: items,
            }
        case 'EDIT_OPENED':
            return {
                ...state,
                editIsOpened: true
            };
        case 'EDIT_CLOSED':
            return {
                ...state,
                editIsOpened: false
            }
        case 'ADD_OPENED':
            return {
                ...state,
                addIsOpened: true
            };
        case 'ADD_CLOSED':
            return {
                ...state,
                addIsOpened: false
            }
        case 'INFO_TRANSFERED':
            let info = action.client;
            let client = {
                id: info.id,
                name: info.name,
                town: info.town,
                phone: info.phone,
                email: info.email,
               /* objects: info.objects,
                objectType: info.objects.type,
                objectContractNumber: info.objects.contractNumber,
                objectStatus: info.objects.status,
                objectStartDate: info.objects.startDate,
                objectFinishDate: info.objects.finishDate,
                objectServices: info.objects.Services,*/
            }
            return {
                ...state,
                clientOnEdit: client,
            }
        case 'ON_ADD':
               let newClient = {...action.newClient, id: state.clientId+1};
            const newArr = [...state.allClients, newClient];
            return {
                ...state,
                allClients: newArr,
                addIsOpened: false,
            }
        case 'ON_EDIT':
            
            let editClient = {...action.editClient, id: action.id}
            const clientIndex = state.allClients.findIndex(item => item.id === editClient.id);
            
            return {
                ...state,
                
                allClients: [
                    ...state.allClients.slice(0, clientIndex),
                    editClient,
                    ...state.allClients.slice(clientIndex+1),
                ]
            };
            
            default: 
            return state;
    }
}
const onEdit = (id, editClient) => {
    console.log(id, editClient)
return {
    type: 'ON_EDIT',
    id,
    editClient,
}
}
const onAdd = (newClient) => {
    return {
        type: 'ON_ADD',
        newClient,
    }
}
const infoTransfered = (client) => {
    return {
        type: 'INFO_TRANSFERED',
        client: client
    }
}
const editClosed = () => {
    return {
        type: 'EDIT_CLOSED'
    }
}
const editOpened = () => {
    return {
        type: 'EDIT_OPENED'
    }
}
const addClosed = () => {
    return {
        type: 'ADD_CLOSED'
    }
}
const addOpened = () => {
    return {
        type: 'ADD_OPENED'
    }
}
const allClientsError = (errorMessage) => {
    return {
        type: 'ALL_CLIENTS_ERROR',
        errorType: errorMessage
    };
}
const allClientsLoaded = (allClients) => {
    return {
        type: 'ALL_CLIENTS_LOADED',
        payload: allClients
    }
}
const clientsFiltered = (text) => {
    
    return {
        type: 'CLIENTS_FILTERED',
        payload: text
    }
}
export default reducer

export {
    allClientsLoaded,
    allClientsError,
    clientsFiltered,
    editOpened,
    editClosed,
    addClosed,
    addOpened,
    infoTransfered,
    onAdd,
    onEdit
}

    