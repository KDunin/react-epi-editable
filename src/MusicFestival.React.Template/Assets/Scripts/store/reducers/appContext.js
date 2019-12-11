import {SET_MODAL_VISIBILTY, TOGGLE_MODAL} from '../actions/appContext';

export const initialState = {
    showModal: false
};

const appContextReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_MODAL_VISIBILTY: return {...state, ...payload};
        case TOGGLE_MODAL: return { ...state, showModal: !state.showModal };
        default: return state;
    }
};

export default appContextReducer;
