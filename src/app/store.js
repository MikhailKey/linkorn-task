import {createStore} from 'redux';
import reducer from '../features/ducks';

const store = createStore(reducer);

export default store;