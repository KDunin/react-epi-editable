import { combineReducers } from 'redux';

import epiDataModelReducer, { initialState as epiDataModelState} from './epiDataModel';
import epiContextReducer, { initialState as epiContextState} from './epiContext';
import appContextReducer, { initialState as appContextState} from './appContext';

export const getRootReducer = () => combineReducers({
    epiDataModel: epiDataModelReducer,
    epiContext: epiContextReducer,
    appContext: appContextReducer,
});


export const getInitialState = () => ({
    epiDataModel: epiDataModelState,
    epiContext: epiContextState,
    appContext: appContextState
});
