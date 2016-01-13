'use strict';

import api                  from '../config/apiSingleton';

export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_REQUEST = 'LOAD_MOVIES_REQUEST';

export function loadMovies(params = {}, query = {}) {
    return (dispatch) => {
        const search = query.search || '';

        dispatch({
            type: LOAD_MOVIES_REQUEST
        });

        return api.movies.list({
            search
        }).then( ({data} ) => {
            dispatch({
                type        : LOAD_MOVIES_SUCCESS,
                movies      : data.movies,
                search
            });
        });
    };
}

