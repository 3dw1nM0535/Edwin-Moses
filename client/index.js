import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./style/styles.css";


import configureStore, { history } from "./store/store";
import App from "./App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <NextApp />
        </Router>
      </Provider>,
      document.getElementById("root"),
    );
  });
}
