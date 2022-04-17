import "./App.css";
import React, { useState, useEffect } from "react";
import ProjectForm from "./Components/ProjectForm";
import Projects from "./Components/Projects";

function App() {
  const [projects, setProjects] = useState([{}]);
  useEffect(() => {
    window.alert("Refresh");
  }, [projects]);
  return (
    <div className="App">
      <ProjectForm projects={projects} setProjects={setProjects} />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
