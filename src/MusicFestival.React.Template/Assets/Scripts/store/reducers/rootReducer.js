import { combineReducers } from 'redux';

import epiDataModelReducer, { initialState as epiDataModelState} from './epiDataModel';
import epiContextReducer, { initialState as epiContextState} from './epiContext';

export const getRootReducer = () => combineReducers({
    epiDataModel: epiDataModelReducer,
    epiContext: epiContextReducer
});


export const getInitialState = () => ({
    epiDataModel: epiDataModelState,
    epiContext: epiContextState
});
