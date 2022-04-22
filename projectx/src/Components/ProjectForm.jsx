import React, { useState } from "react";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { addProject } from "../Actions/ProjectActions";
import random from "random-key-generator";
const initializeForm = {
  name: "",
  description: "",
  deadline: "",
  id: random(5),
};
function ProjectForm(props) {
  const [form, setForm] = useState(initializeForm);

  const onInputChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmitChange = (e) => {
    e.preventDefault();
    props.addProject(form);
    setForm(initializeForm);
  };
  const onCancelChange = (e) => {
    e.preventDefault();
    setForm(initializeForm);
  };
  return (
    <div className="Form_Container">
      <form onSubmit={onSubmitChange}>
        <h1>Add Project Here</h1>
        <label>Project Name</label>
        <input
          id="Form_Input"
          name="name"
          value={form.name}
          type={"text"}
          onChange={onInputChange}
          required
        />
        <label>Description</label>
        <br></br>

        <input
          id="Form_Input"
          name="description"
          value={form.description}
          type={"text"}
          onChange={onInputChange}
          required
        />
        <br />
        <label>Deadline</label>
        <input
          id="Form_Input-Date"
          name="deadline"
          value={form.deadline}
          type={"date"}
          onChange={onInputChange}
          required
        />
        <br />
        <Button id="Form_Button" variant="contained" type="submit">
          Create
        </Button>
        <br />
        <Button
          id="Form_Button"
          color="error"
          variant="contained"
          onClick={onCancelChange}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps, { addProject })(ProjectForm);
