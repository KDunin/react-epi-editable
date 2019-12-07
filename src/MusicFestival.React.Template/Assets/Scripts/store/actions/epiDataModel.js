import epi from '../../api/epi';

export const EPI_DATA_MODEL_UPDATE = 'EPI_DATA_MODEL_UPDATE';

const updateModelAction = payload => ({
    type: EPI_DATA_MODEL_UPDATE,
    payload
});

export const updateModelByUrl = (friendlyUrl) => dispatch => {
    return epi
        .getContentByFriendlyUrl(friendlyUrl)
        .then(response => {
            dispatch(updateModelAction(response.data));
        });
};

export const updateModelByContentLink = (contentLink) => (dispatch, getState) => {
    const { route } = getState();

    return epi.getContentByContentLink(contentLink, route.query).then(response => {
        console.log(response);

        dispatch(updateModelAction(response.data));
    });
};
