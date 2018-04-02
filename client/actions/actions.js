import axios from "axios";

import { findProjects } from "./actionCreators";

export const fetchProjects = title => dispatch =>
  axios.post("/api/find/projects", { title }).then(res => res.data.projects);
