import React from "react";
import { connect } from "react-redux";
import Project from "./Project";

function Projects(props) {
  return (
    <div>
      {props.projects.length > 0 ? (
        props.projects.map((this_Project) => {
          return <Project project={this_Project}></Project>;
        })
      ) : (
        <h1>No Projects Available</h1>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps)(Projects);
