'use strict';

import api from '../config/apiSingleton';

import {
    ADD_TODO,
    COMPLETE_TODO
} from './todos.type';

export function addTodo(params = {}, query = {}) {
    return {
        type: ADD_TODO,
        todo: params.todo
    };
}

export function completeTodo(params = {}, query = {}) {
    return (dispatch) => {
        const search = query.search || '';

        dispatch({
            type   : COMPLETE_TODO,
            todoId : params.todoId
        });
    };
}



