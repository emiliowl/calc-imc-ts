import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "proxy-polyfill/proxy.min.js";

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PersonContextProvider from "./contexts/PersonContextProvider";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

function render() {
    const ImcApp = lazy(() => import("./apps/ImcApp"));

    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/Imc">Imc App!</Link>
                        </li>
                        <li>
                            <Link to="/Other">Other App!</Link>
                        </li>
                    </ul>
                    <br />
                    <Switch>
                        <Route path="/Imc">
                            <PersonContextProvider>
                                <Suspense
                                    fallback={<span>loading imc....</span>}
                                >
                                    <ImcApp />
                                </Suspense>
                            </PersonContextProvider>
                        </Route>
                        <Route path="/Other">
                            <span>This is other app...</span>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </React.StrictMode>,
        document.getElementById("root")
    );
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
