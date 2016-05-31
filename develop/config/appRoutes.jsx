'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App                from './../containers/App.jsx';
import MainLayout         from './../containers/layouts/MainLayout.jsx';
import TodosPageContainer from './../containers/pages/TodosPage.jsx';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={TodosPageContainer}/>
    </Route>
);
