import types from '../actions/types/api.types';

const DEFAULT_STATE = {
    paginator: {},
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.SET_PAGINATOR: return setPaginator(state, action);

        default:
            return state;
    }
};

function setPaginator(state, action) {
    return {
        ...state,
        paginator: {
            ...state.paginator,
            ...action.paginator,
        },
    };
}

