import { FIND_PROJECTS } from "../actions/types";

export default function projects(state = [], action = {}) {
  switch (action.type) {
    case FIND_PROJECTS:
      return action.projects;
    default:
      return state;
  }
}
