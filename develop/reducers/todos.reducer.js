'use strict';

import apiResponseFormatter from '../utils/apiResponseFormatter';

import {
    ADD_TODO
} from '../actions/todos';

export default function todos(state = {}, action) {
    console.log(state);
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                entities: [...state, action.todo]
            });

        default:
            return state;
    }
}
