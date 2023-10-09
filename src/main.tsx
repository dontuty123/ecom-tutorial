/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
