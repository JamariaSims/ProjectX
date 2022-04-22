import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { addProjectID, deleteProject } from "../Actions/ProjectActions";

function Project(props) {
  const { project } = props;

  const onProjectDelete = (e) => {
    props.deleteProject(e.target.name);
  };
  return (
    <div className="Project_Container" key={project.id}>
      <h1>{project.name}</h1>
      <img
        alt="Project Name Here"
        src={"//unsplash.it/500/300/?=" + project.name}
      />
      <p id="Project-Description_Title">Description:</p>
      <p id="Project-Description">{project.description}</p>
      <p>Status: In Progress</p>
      <br />
      <p>Deadline: {project.deadline}</p>
      <ButtonGroup>
        {" "}
        <Button onClick={onProjectDelete} name={project.id}>
          Delete
        </Button>
        <Button>View</Button>
        <Button>Complete</Button>
      </ButtonGroup>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps, { deleteProject, addProjectID })(
  Project
);
