'use strict';

import { combineReducers } from 'redux';

// reducers
import movies from './movies.reducer';


const rootReducer = combineReducers({
    movies
});

export default rootReducer;
