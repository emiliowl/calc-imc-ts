import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "proxy-polyfill/proxy.min.js";

import React from "react";
import ReactDOM from "react-dom";

import PersonContextProvider from "./contexts/PersonContextProvider";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <PersonContextProvider>
            <App />
        </PersonContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
