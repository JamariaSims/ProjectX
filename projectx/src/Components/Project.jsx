import React from "react";

export default function Project(props) {
  const { project } = props;
  return (
    <div>
      <h1>{project.name}</h1>
      <img alt="Project Name Here" src="//unsplash.it/500/300" />
      <p>{project.description}</p>
      <p>Date Created: {project.deadline}</p>
      <p>{}</p>
    </div>
  );
}
