'use strict';

import '../node_modules/babel-core/polyfill';

import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';

import { Router, useRouterHistory } from 'react-router';
import { createHashHistory }        from 'history';

import routes         from './config/appRoutes.jsx';
import configureStore from './store/root.store';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router children={routes} history={appHistory} />
    </Provider>,

    document.getElementById('react-view')
);




