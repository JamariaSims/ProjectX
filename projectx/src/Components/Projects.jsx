import React from "react";
import Project from "./Project";

export default function Projects(props) {
  const { projects } = props;
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((this_Project) => {
        return <Project project={this_Project}></Project>;
      })}
    </div>
  );
}
