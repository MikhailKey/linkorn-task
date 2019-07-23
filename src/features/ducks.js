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
export default reducer

    