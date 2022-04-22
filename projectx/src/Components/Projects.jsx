import React, { useEffect } from "react";
import { connect } from "react-redux";
import Project from "./Project";

function Projects(props) {
  useEffect(() => {
    if (props) {
      localStorage.setItem("ProjectX_Database", JSON.stringify(props));
    }
  }, [props]);
  return (
    <div>
      {props.projects ? (
        props.projects.map((this_Project) => {
          return (
            <div key={this_Project.id}>
              <Project project={this_Project} />
            </div>
          );
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
export default connect(mapStateToProps, {})(Projects);
