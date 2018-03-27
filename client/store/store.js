import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";

import rootReducer from "../reducer/index";

export const history = createHistory();

const logger = createLogger();
const historyMiddleware = routerMiddleware(history);

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk, historyMiddleware)),
  );

  return store;
}
