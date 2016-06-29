'use strict';

import api from '../config/apiSingleton';

import types from './types/todos.types.js';

export function addTodo(params = {}, query = {}) {
    return {
        type: types.ADD_TODO,
        todo: params.todo
    };
}

export function clearAll(params = {}, query = {}) {
    return {
        type: types.CLEAR_ALL
    };
}

export function completeTodo(params = {}, query = {}) {
    return (dispatch) => {
        const search = query.search || '';

        dispatch({
            type   : types.COMPLETE_TODO,
            todoId : params.todoId
        });
    };
}



