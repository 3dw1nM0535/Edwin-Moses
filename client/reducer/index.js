import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import projects from "./projects";
import user from "./user";

export default combineReducers({
  projects,
  user,
  router: routerReducer,
});
