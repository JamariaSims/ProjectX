import "./App.css";
import { useState } from "react";
import ProjectForm from "./Components/ProjectForm";
import Projects from "./Components/Projects";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <ProjectForm />
      <Projects />
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(App);
