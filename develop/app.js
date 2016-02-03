'use strict';

import '../node_modules/babel-core/polyfill';

import React        from 'react';
import ReactDOM     from 'react-dom';
import { Router }   from 'react-router';
import { Provider } from 'react-redux';

import routes         from './config/appRoutes.jsx';
import history        from './config/appHistory.js';
import configureStore from './store/root.store';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,

    document.getElementById('react-view')
);




