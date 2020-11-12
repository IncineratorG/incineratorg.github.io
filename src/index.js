import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store";
import AppLoader from "./components/common/app-loader/AppLoader";

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <AppLoader />
    </Provider>,
    rootElement
);
