'use strict';

import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import 'whatwg-fetch';

import configureStore from '../shared/store/configureStore';
import routes from '../shared/routes.jsx';
import history from '../shared/history.js';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,

    document.getElementById('react-view')
);




