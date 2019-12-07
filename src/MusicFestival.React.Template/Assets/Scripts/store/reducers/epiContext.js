import {EPI_UPDATE_CONTEXT} from '../actions/epiContext';

export const initialState = {
    inEditMode: false,
    isEditable: false
};

const epiContextReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case EPI_UPDATE_CONTEXT:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};


export default epiContextReducer;
