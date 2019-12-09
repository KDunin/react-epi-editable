export const EPI_UPDATE_CONTEXT = 'EPI_UPDATE_CONTEXT';

export const updateEpiContextAction = (payload) => ({
    type: EPI_UPDATE_CONTEXT,
    payload
});

/**
 * TODO
 * DO I NEED THIS?
 */
export const updateEpiContext = () => dispatch => {
    dispatch(updateEpiContextAction({
        inEditMode: true,
        isEditable: true
    }));
};
