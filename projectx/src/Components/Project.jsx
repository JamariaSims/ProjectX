import React from "react";

export default function Project(props) {
  const { project } = props;
  return (
    <div>
      <h1>{project.name}</h1>
      <img alt="Project Name Here" src="//unsplash.it/500/500" />
      <h1>{project.description}</h1>
      <h1>{project.deadline}</h1>
    </div>
  );
}
