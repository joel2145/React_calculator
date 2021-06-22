import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { reducer } from './redux/reducers';
import { AuthApp } from './AuthApp';

const Store = createStore(reducer);

ReactDOM.render(
    <Provider store={Store}>
        <App />
        <AuthApp/>
    </Provider>,
    document.getElementById('root')
);