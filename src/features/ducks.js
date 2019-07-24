const initialState = {
    allClients: [],
    loading: true,
    error: false,
    filteredClients: [], 
    isOpened: false,
    clientOnEdit: [],
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
            let items = state.allClients.filter((item) => (item.name || item.town || item.phone || item.email).toLowerCase().includes(searchValue.toLowerCase()));
            return {
                ...state,
                filteredClients: items,
            }
        case 'EDIT_OPENED':
            return {
                ...state,
                isOpened: true
            };
        case 'EDIT_CLOSED':
            return {
                ...state,
                isOpened: false
            }
        case 'INFO_TRANSFERED':
            let info = action.client;
            let client = {
                name: info.name,
                town: info.town,
                phone: info.phone,
                email: info.email,
                objects: info.objects,
            }
            return {
                ...state,
                clientOnEdit: client,
            }
            default: 
            return state;
    }
}
const infoTransfered = (client) => {
    console.log(client)
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
    infoTransfered
}

    