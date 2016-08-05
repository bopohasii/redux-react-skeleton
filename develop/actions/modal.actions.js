import mTypes from './types/modal.types';

export const openModal = (key) => ({
    type: mTypes.OPEN_MODAL,
    key,
});

export const closeModal = () => ({
    type: mTypes.CLOSE_MODAL,
});
