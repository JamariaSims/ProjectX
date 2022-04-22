import {
  ADD_PROJECT,
  DELETE_PROJECT,
  ADD_PROJECT_ID,
} from "../Actions/ProjectActions";

const Reducer = (
  state = JSON.parse(localStorage.getItem("ProjectX_Database")) || [],
  action
) => {
  if (!localStorage.getItem("ProjectX_Database")) {
    localStorage.setItem("ProjectX_Database", JSON.stringify([]));
  }
  switch (action.type) {
    case ADD_PROJECT: {
      console.log(state);
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    }
    case ADD_PROJECT_ID: {
      console.log(state);
      return {
        ...state,
        keys: state.keys.add(action.payload.id, action.payload.name),
      };
    }
    case DELETE_PROJECT: {
      console.log(state);
      let currentProjects = state.projects.filter(
        (project) => project.id !== action.payload
      );
      return {
        ...state,
        projects: currentProjects,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
