import epi from '../../api/epi';

export const EPI_DATA_MODEL_UPDATE = 'EPI_DATA_MODEL_UPDATE';

const updateModelAction = payload => ({
    type: EPI_DATA_MODEL_UPDATE,
    payload
});

export const updateModelByUrl = friendlyUrl => async dispatch => {
    const response = await epi.getContentByFriendlyUrl(friendlyUrl);
    dispatch(updateModelAction(response.data));
};

export const updateModelByContentLink = (contentLink) => async (dispatch, getState) => {
    const { route } = getState();
    const response = await epi.getContentByContentLink(contentLink, route.query);
    dispatch(updateModelAction(response.data));
};
