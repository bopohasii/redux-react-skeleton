'use strict';

import { combineReducers } from 'redux';

// reducers
import todos from './todos.reducer';


const rootReducer = combineReducers({
    todos
});

export default rootReducer;
