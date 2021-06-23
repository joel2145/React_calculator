import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Calculator from './Calculator';
import { reducer } from './redux/reducers';
import { Login } from './Login';

const Store = createStore(reducer);

ReactDOM.render(
    <Provider store={Store}>
        <Login/>
        <Calculator />
    </Provider>,
    document.getElementById('root')
);