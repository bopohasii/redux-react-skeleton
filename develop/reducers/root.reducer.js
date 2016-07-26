import { combineReducers } from 'redux';

/**
 * Reducers
 */
import pokemons from './pokemons.reducer';


const rootReducer = combineReducers({
    pokemons,
});

export default rootReducer;
