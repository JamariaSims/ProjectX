import "./App.css";
import { useEffect } from "react";
import ProjectForm from "./Components/ProjectForm";
import Projects from "./Components/Projects";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    console.log(props.projects);
  }, [props.projects]);
  return (
    <div className="App">
      <ProjectForm />
      <Projects />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps, {})(App);
