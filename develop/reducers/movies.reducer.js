'use strict';

import apiResponseFormatter from '../utils/apiResponseFormatter';

import {
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIES_REQUEST
} from '../actions/movies';

export default function movies(state = { movies: [], isLoading: false}, action) {
    switch (action.type) {
        case LOAD_MOVIES_REQUEST:
            return Object.assign({}, state, {
                isLoading: true
            });
        case LOAD_MOVIES_SUCCESS:
            const entities = action.movies.map( movie => apiResponseFormatter.formatMovie(movie) )
                .filter( m => m.title.toLowerCase().indexOf(action.search) !== -1 );

            return Object.assign({}, state, {
                isLoading: false,
                entities,
                search: action.search
            });

        default:
            return state;
    }
}
