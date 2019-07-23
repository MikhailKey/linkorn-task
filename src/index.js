import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'; 
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './features/errorBoundry';
import InfoService from './services/infoService';
import InfoServiceContext from './features/infoServiceContext'
import store from './app/store';

const infoService = new InfoService();

ReactDOM.render(
<Provider store={store}>
    <ErrorBoundry>
        <InfoServiceContext.Provider value={infoService}>
            <Router>
                <App />
            </Router>
        </InfoServiceContext.Provider>
    </ErrorBoundry>
</Provider>
, document.getElementById('root'));



