import { FIND_PROJECTS } from "./types";

export const findProjects = projects => ({
  type: FIND_PROJECTS,
  projects,
});
