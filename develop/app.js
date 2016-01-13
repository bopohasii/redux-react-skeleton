'use strict';

import '../node_modules/babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import 'whatwg-fetch';

import configureStore from './store/configureStore';
import routes from './config/appRoutes.jsx';
import history from './config/appHistory.js';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,

    document.getElementById('react-view')
);




