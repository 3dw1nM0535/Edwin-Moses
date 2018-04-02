import axios from "axios";

import { findProjects } from "./actionCreators";

export const fetchProjects = title => dispatch =>
  axios.post("/api/projects/find", { title }).then(res => res.data.projects)
    .then((projects) => {
      dispatch(findProjects(projects));
    });

export const postProject = project =>
  axios.post("/api/projects", { project }).then(res => res.data.projects);
