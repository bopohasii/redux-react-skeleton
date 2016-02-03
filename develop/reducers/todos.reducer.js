'use strict';

import apiResponseFormatter from '../utils/apiResponseFormatter';
import { ADD_TODO }         from '../actions/todos.type';

function todos(state = {}, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                todo(undefined, action)
            ]
        } break;

        case COMPLETE_TODO: {
            return state.map(todo => todo(todo, action))
        } break;

        default:
            return state;
    }
};


const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                id    : Date.now(),
                value : action.value,
                date  : new Date(),
                completed : false
            }
        } break;

        case COMPLETE_TODO: {
            if (state.id !== action.todoId) return state;

            return {
                ...state,
                completed: !state.completed
            }
        } break;

        default:
            return state;
    }
};




export default todos;

