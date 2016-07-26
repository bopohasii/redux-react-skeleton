import { combineReducers } from 'redux';

/**
 * Reducers
 */
import pokeball from './pokeball.reducer';
import api from './api.reducer';


const rootReducer = combineReducers({
    pokeball,
    api,
});

export default rootReducer;
