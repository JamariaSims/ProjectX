import {
  ADD_PROJECT,
  DELETE_PROJECT,
  DELETE_FAVORITE,
} from "../Actions/ProjectActions";

const initialState = {
  projects: [],
  project: {
    name: "",
    description: "",
    status: "Created",
    dateCreated: "",
    lastModified: "",
    deadline: "",
  },
  favorites: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT: {
      console.log(state);
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    }
    default:
      return state;
  }
};

export default Reducer;
