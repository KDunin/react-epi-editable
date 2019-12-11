export const SET_MODAL_VISIBILTY = 'SET_MODAL_VISIBILTY';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const setModalVisibilityAction = (showModal) => ({
    type: SET_MODAL_VISIBILTY,
    payload: {
        showModal
    }
});

export const toggleModalAction = () => ({
    type: TOGGLE_MODAL
});
