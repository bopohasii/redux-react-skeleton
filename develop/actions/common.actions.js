import cTypes from './types/common.types';

// * Actions structure *
//
// - have a { type } property.
// - have a { error } property.
// - have a { payload } property.
// - have a { meta } property.

export default {
    // todo: think about merging CLEAR_DATA_STATE + CLEAR_API_STATE
};

export const openModal = (payload) => ({
    type: cTypes.OPEN_MODAL,
    payload,
});

export const closeModal = () => ({
    type: cTypes.CLOSE_MODAL,
});

export const openContainerModal = (payload) => ({
    type: cTypes.OPEN_CONTAINER_MODAL,
    payload,
});

export const closeContainerModal = () => ({
    type: cTypes.CLOSE_CONTAINER_MODAL,
});
