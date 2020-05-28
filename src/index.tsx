import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux';

import Shell from './components/Shell';
import { authReducer } from './reducers';
import * as serviceWorker from './serviceWorker';
import { TAuthState } from './types';

import './index.css';

export type TGlobalState = {
    authModule: TAuthState
};

const rootReducer = combineReducers({
    authModule: authReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Shell />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
