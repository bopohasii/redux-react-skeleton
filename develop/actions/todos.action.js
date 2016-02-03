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
    }
};

export function completeTodo(params = {}, query = {}) {
    return (dispatch) => {
        //const search = query.search || '';

        dispatch({
            type   : COMPLETE_TODO,
            todoId : params
        });
    }
};



