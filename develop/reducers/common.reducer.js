import cTypes from '../actions/types/common.types';

const DEFAULT_STATE = {
    isModalOpen: false,
    isContainerModalOpen: false,
    containerModalData: {},
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case cTypes.OPEN_MODAL:
            return reduceOpenModal(state, action);
        case cTypes.CLOSE_MODAL:
            return reduceCloseModal(state, action);

        case cTypes.OPEN_CONTAINER_MODAL:
            return reduceOpenContainerModal(state, action);
        case cTypes.CLOSE_CONTAINER_MODAL:
            return reduceCloseContainerModal(state, action);


        default:
            return state;
    }
};


function reduceOpenModal(state, action) {
    const { modalData } = action.payload;
    const isOpen = modalData && modalData.isOpen;

    return {
        ...state,
        isModalOpen: isOpen !== null && isOpen !== undefined ? isOpen : true,
        modalData,
    };
}

function reduceCloseModal(state) {
    return {
        ...state,
        isModalOpen: false,
        modalData: {},
    };
}

function reduceOpenContainerModal(state, action) {
    const { containerModalData } = action.payload;

    return {
        ...state,
        isLoading: false,
        isModalOpen: false,
        isContainerModalOpen: true,
        containerModalData,
    };
}

function reduceCloseContainerModal(state) {
    return {
        ...state,
        isContainerModalOpen: false,
        containerModalData: {},
    };
}
