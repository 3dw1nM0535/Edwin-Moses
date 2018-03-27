import { FIND_PROJECTS, FIND_USER } from "./types";

export const findProjects = projects => ({
  type: FIND_PROJECTS,
  projects,
});

export const findUSer = user => ({
  type: FIND_USER,
  user,
});
