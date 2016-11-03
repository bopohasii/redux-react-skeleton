import apiTypes from './types/api.types';

import { httpStatusHandler } from '../constants/httpErrors.constant';

// * Actions structure *
//
// - have a { type } property.
// - have a { error } property.
// - have a { payload } property.
// - have a { meta } property.

export default {
    // save in the api Reducer
    request(key, value = true) {
        return {
            type: apiTypes.SET_LOADING,
            payload: { key, value },
        };
    },

    success(type, payload, meta) {
        return (dispatch) => {
            const action = payload
                ? { type, payload, meta }
                : { type };

            dispatch(action);
            dispatch(this.request(type, false));
        };
    },

    // save in the api Reducer
    failure(key, error) {
        const action = {
            type: apiTypes.SET_ERROR,
            error: {
                key,
                value: {
                    ...httpStatusHandler(error.status),
                    message: error,
                },
            },
        };

        return action;
    },

    // save in the api Reducer
    paginator(key, paginator) {
        const action = {
            type: apiTypes.SET_PAGINATOR,
            payload: { key, value: paginator },
        };

        return action;
    },

    clearState(key) {
        const action = {
            type: apiTypes.CLEAR_API_STATE,
            payload: { key },
        };

        return action;
    },
};
