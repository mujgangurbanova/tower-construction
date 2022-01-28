import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import "styles/App.scss";
import { Provider } from "react-redux";
import { persistor, store } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
        </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
