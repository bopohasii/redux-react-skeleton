'use strict';

import types from '../actions/types/todos.types.js';

function todos(state = [], action) {
    switch (action.type) {
        case types.ADD_TODO: {
            return [
                ...state,
                simpleTodo(undefined, action)
            ];
        } break;

        case types.CLEAR_ALL: {
            return [];
        } break;

        case types.COMPLETE_TODO: {
            return state.map((todo) => simpleTodo(todo, action));
        } break;

        default:
            return state;
    }
}


function simpleTodo(state, action) {
    switch (action.type) {
        case types.ADD_TODO: {
            return {
                id    : Date.now(),
                value : action.todo,
                date  : (new Date).toLocaleDateString('en-US', {hour: '2-digit', minute:'2-digit'}),
                completed : false
            };
        } break;

        case types.COMPLETE_TODO: {
            if (state.id !== action.todoId) return state;

            return {
                ...state,
                completed: !state.completed
            };
        } break;

        default:
            return state;
    }
}

export default todos;

