export const ADD_PROJECT = "ADD_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const ADD_PROJECT_ID = "ADD_PROJECT_ID";
export const SAVE_PROJECTS = "SAVE_PROJECTS";

export const deleteProject = (id) => {
  console.log("Deleting project..");
  return { type: DELETE_PROJECT, payload: id };
};
export const addProject = (project) => {
  console.log("Adding project...");
  return { type: ADD_PROJECT, payload: project };
};
export const addProjectID = (name = typeof string, id = typeof int) => {
  console.log("Adding id to project...");
  return { type: ADD_PROJECT_ID, payload: { name: name, id: id } };
};
