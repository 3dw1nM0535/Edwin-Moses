import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import createHistory from "history/createBrowserHistory";

import rootReducer from "../reducer/index";

export const history = createHistory();

const loggerMiddleware = createLogger();
const historyMiddleware = routerMiddleware(history);

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware, historyMiddleware)),
  );

  return store;
}
