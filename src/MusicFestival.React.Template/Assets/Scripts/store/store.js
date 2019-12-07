import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { getRootReducer, getInitialState } from './reducers/rootReducer';
import ReduxThunk from 'redux-thunk';

const initStore = () => {
    const composeEnhancers = composeWithDevTools({});

    return createStore(
        getRootReducer(),
        getInitialState(),
        composeEnhancers(applyMiddleware(ReduxThunk))
    );
};

export default initStore;
