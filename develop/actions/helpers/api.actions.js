import apiTypes from '../types/api.types';

export default {
    request(type) {
        const action = { type };

        return action;
    },

    success(type, payload) {
        const action = payload
            ? { type, payload }
            : { type };

        return action;
    },

    failure(type, error) {
        const action = error
            ? { type, error }
            : { type };

        return action;
    },

    setPaginator(key, paginator) {
        const action = {
            type: apiTypes.SET_PAGINATOR,
            paginator: {
                [key]: paginator,
            },
        };

        return action;
    },
};
