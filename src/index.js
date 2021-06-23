import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Calculator from './templates/Calculator';
import { reducer } from './redux/reducers';
import { Login } from './templates/Login';
import App from './App';

const Store = createStore(reducer);

ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);