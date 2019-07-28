const initialState = {
    allClients: [],
    loading: true,
    error: false,
    filteredClients: [], 
    editIsOpened: false,
    addIsOpened: false,
    clientOnEdit: [],
    clientObjects: [],
    clientServices: [],
    addServiceIsOpened: false,
    addServiceInfoIsOpened: false,
    clientId: 3,
    typeOfObject: 'авто',
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
            return {
                ...state,
                filteredClients: items,
            }
        case 'EDIT_OPENED':
            console.log(state.clientOnEdit);
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
            let client = action.client;
            return {
                ...state,
                clientOnEdit: client,
            }
        case 'ON_ADD':
            let addedClient = {...action.newClient, id: state.clientId+1, services: state.clientObjects}; 
            const newArr = [...state.allClients, addedClient];
            return {
                ...state,
                clientId: state.clientId+1,
                allClients: newArr,
                addIsOpened: false,
                clientObjects: [],
            }
        case 'ON_ADD_OBJECT':
            let newObject = {...action.newObject, services: state.clientServices};
            return {
                ...state,
                clientObjects: [...state.clientObjects, newObject]
            }
        case 'ON_TYPE_SELECTED':
            return {
                ...state,
                typeOfObject: action.objectType,
            }
        case 'ON_ADD_SERVICE':
            let newService = action.newService;
            return {
                ...state,
                clientServices:[...state.clientServices, newService]
            }
        case 'SHOW_SERVICE':
            return {
                ...state,
                addServiceIsOpened: true,
            }  
         case 'HIDE_SERVICE':
            return {
                ...state,
                addServiceIsOpened: false,
            }    
        case 'SHOW_SERVICE_INFO':
            return {
                ...state,
                addServiceInfoIsOpened: true,
            }  
         case 'HIDE_SERVICE_INFO':
            return {
                ...state,
                addServiceInfoIsOpened: false,
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
return {
    type: 'ON_EDIT',
    id,
    editClient,
}
}
const onTypeSelected = (objectType) => {
    return {
        type: 'ON_TYPE_SELECTED',
        objectType,
    }
}
const onAdd = (newClient) => {
    return {
        type: 'ON_ADD',
        newClient,
    }
}
const onAddObject = (newObject) => {
    return {
        type: 'ON_ADD_OBJECT',
        newObject,
    }
}
const infoTransfered = (client) => {
    return {
        type: 'INFO_TRANSFERED',
        client,
    }
}
const onAddService = (newService) => {
    console.log(newService)
    return {
        type: 'ON_ADD_SERVICE',
        newService,
    }
}
const showService = () => {
    return {
        type: 'SHOW_SERVICE'
    } 
}
const hideService = () => {
    return {
        type: 'HIDE_SERVICE'
    } 
}
const showServiceInfo = () => {
    return {
        type: 'SHOW_SERVICE_INFO'
    } 
}
const hideServiceInfo = () => {
    return {
        type: 'HIDE_SERVICE_INFO'
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
    onAddObject,
    onEdit,
    showService,
    hideService,
    showServiceInfo,
    hideServiceInfo,
    onAddService,
    onTypeSelected,
}

    