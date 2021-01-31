import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import configureStore from "./store";
import fetch, { restoreCSRF } from "./store/csrf";

import * as sessionActions from "./store/reducers/session";
import * as userActions from "./store/reducers/userInfo";
import * as categoryActions from "./store/reducers/categories";

import ModalProvider from "./context/ModalProvider";

import App from "./App";
import "./index.css";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();
  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.userActions = userActions;
  window.categoryActions = categoryActions;
}

const Root = () => {
  return (
    <>
      <Provider store={store}>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </Provider>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
