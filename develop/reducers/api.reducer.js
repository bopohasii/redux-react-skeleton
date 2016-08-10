import types from '../actions/types/api.types';

// State example
// state = {
//     'GET_POKEMNOS': {
//         isLoading: { true|false },
//         paginator: {},
//         error: { null|{} },
//     },
//     ...
// }

export default (state = {}, action) => {
    switch (action.type) {
        case types.SET_LOADING: return setLoading(state, action);
        case types.SET_PAGINATOR: return setPaginator(state, action);
        case types.SET_ERROR: return setError(state, action);
        case types.CLEAR_API_STATE: return clearState(state, action);

        default:
            return state;
    }
};

function setLoading(state, action) {
    return {
        ...state,
        [action.payload.key]: {
            ...state[action.payload.key],
            isLoading: action.payload.value,
        },
    };
}

function setPaginator(state, action) {
    return {
        ...state,
        [action.payload.key]: {
            ...state[action.payload.key],
            paginator: action.payload.value,
        },
    };
}

function setError(state, action) {
    return {
        ...state,
        [action.error.key]: {
            ...state[action.error.key],
            error: action.error.value,
        },
    };
}

function clearState(state, action) {
    const shallowState = { ...state };

    delete shallowState[action.payload.key];

    return shallowState;
}

