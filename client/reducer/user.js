import { FIND_USER, FIND_PROJECTS } from "../actions/types";

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case FIND_USER:
      return action.user;
    case FIND_PROJECTS:
      return action.projects;
    default:
      return state;
  }
}
