import 'materialize-css/dist/css/materialize.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from "./components/App";
import reducers from "./reducers";
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const rootElement = document.querySelector('#root');

ReactDOM.createRoot(rootElement).render(
    <Provider store={store}><App /></Provider>
);