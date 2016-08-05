import mTypes from '../actions/types/modal.types.js';

const DEFAULT_STATE = {
    isModalActive: false,
    key: null,
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case mTypes.OPEN_MODAL:
            return reduceModalOpen(state, action);

        case mTypes.CLOSE_MODAL:
            return reduceModalClose();

        default:
            return state;
    }
};


function reduceModalOpen(_, action) {
    return {
        isModalActive: true,
        key: action.key,
    };
}

function reduceModalClose() {
    return {
        isModalActive: false,
        key: null,
    };
}
