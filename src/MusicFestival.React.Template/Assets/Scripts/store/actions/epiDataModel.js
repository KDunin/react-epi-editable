import epi from "../../api/epi";
import { getParamsFromUrl } from "../../utils/apiUtils";

export const EPI_DATA_MODEL_UPDATE = "EPI_DATA_MODEL_UPDATE";

const updateModelAction = payload => ({
    type: EPI_DATA_MODEL_UPDATE,
    payload
});

export const updateModelByUrl = friendlyUrl => async dispatch => {
    const response = await epi.getContentByFriendlyUrl(friendlyUrl);
    dispatch(updateModelAction(response.data));
};

export const updateModelByContentLink = contentLink => async dispatch => {
    /**
     * TODO
     * Do I need to implement route in store?
     */
    const params = getParamsFromUrl();
    const response = await epi.getContentByContentLink(contentLink, params);
    dispatch(updateModelAction(response.data));
};
