import { combineReducers } from 'redux';

/**
 * Reducers
 */
import pokeball from './pokeball.reducer';
import common from './common.reducer';
import api from './api.reducer';


const rootReducer = combineReducers({
    pokeball,
    common,
    api,
});

export default rootReducer;
