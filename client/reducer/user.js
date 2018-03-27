import { FIND_USER } from "../actions/types";

export default function user(state = {}, action) {
  switch (action.type) {
    case FIND_USER:
      return action.user;
    default:
      return state;
  }
}
