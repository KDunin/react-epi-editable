import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import initStore from './store/store';

const files = require.context('@/Images/SVG', false, /.*\.svg$/);
files.keys().forEach(files);

export const store = initStore();

import '@/Scripts/epiMessages';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('App')
);
