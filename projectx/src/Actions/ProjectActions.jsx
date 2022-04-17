export const ADD_PROJECT = "ADD_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export const deleteProject = (id) => {
  console.log("Deleting project..");
  return { type: DELETE_PROJECT, payload: id };
};
export const deleteFavorite = (id) => {
  return { type: DELETE_FAVORITE, payload: id };
};
export const addProject = (project) => {
  console.log("Adding project...");
  return { type: ADD_PROJECT, payload: project };
};
