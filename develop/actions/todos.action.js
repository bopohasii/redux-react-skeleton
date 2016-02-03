'use strict';

import api from '../config/apiSingleton';

import { ADD_TODO } from './todos.type';

export function addTodo(params = {}, query = {}) {
    return (dispatch) => {
        const search = query.search || '';

        dispatch({
            type: ADD_TODO,
            todo: params
        });

        //return api.movies.list({
        //    search
        //}).then( ({data} ) => {
        //    dispatch({
        //        type        : LOAD_MOVIES_SUCCESS,
        //        movies      : data.movies,
        //        search
        //    });
        //});
    };
}

