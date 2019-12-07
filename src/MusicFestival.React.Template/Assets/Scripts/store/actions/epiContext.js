export const EPI_UPDATE_CONTEXT = 'EPI_UPDATE_CONTEXT';

const updateEpiContextAction = (inEditMode, isEditable) => ({
    type: EPI_UPDATE_CONTEXT,
    payload: {
        inEditMode,
        isEditable
    }
});

export const updateEpiContext = () => dispatch => {

    dispatch(updateEpiContextAction(true, true));
};
