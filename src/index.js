import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';


import { Provider } from 'react-redux'
import './index.css';
import { createStore, applyMiddleware } from 'redux';

import promiseMiddleware from 'redux-promise-middleware'

import thunk from 'redux-thunk';

import reducers from './reducers'

import * as serviceWorker from './serviceWorker';

import { Router ,browserHistory } from 'react-router';


const store = createStore(
        reducers,
        applyMiddleware(thunk, promiseMiddleware())
    )

// store.subscribe(() => { console.log('subscribe', store.getState())})
// console.log('before dispatch', store.getState());

store.dispatch({
    type: 'INCREMENT'
})

ReactDOM.render(
        
    <Provider store={store}>
        <Router
            history={browserHistory}
            routes={routes}
        />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
