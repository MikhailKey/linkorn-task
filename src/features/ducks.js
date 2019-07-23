const initialState = {
    allClients: [],
    loading: true,
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ALL_CLIENTS_LOADED':
            return {
                ...state,
                loading: false,
                allClients:action.payload,
            }
            default: 
            return state;
    }
}


const allClientsLoaded = (allClients) => {
    return {
        type: 'ALL_CLIENTS_LOADED',
        payload: allClients
    }
}
export default reducer

export {
    allClientsLoaded,
}

    