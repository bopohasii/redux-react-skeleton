'use strict';

import apiResponseFormatter from '../utils/apiResponseFormatter';
import { ADD_TODO }         from '../actions/todos.type';

function todos(state = {}, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                entities: [...state, action.todo]
            });

        default:
            return state;
    }
}

export default todos;

