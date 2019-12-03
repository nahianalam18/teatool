import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./confirm";

class UserForm extends Component {
  state = {
    step: 1,
    firstname: "",
    lastname: "",
    grade: "",
    age: "",
    notes: "",
    parentemail: ""
  };

  // Handle Fields Change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  resetState = () => {
    // console.log(firebase.name);
    // console.log(firebase.database());
    this.setState({
      step: 1,
      firstname: "",
      lastname: "",
      age: "",
      grade: "",
      notes: "",
      parentemail: ""
    });
  };

  handleConfirm = e => {
    this.props.userInfo(this.state); // Once the confirm button is pressed, The function is used to handle that click
    this.handleChange();
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  addStudent = e => {
    const student = {
      ...e,
      id: this.props.state.students.length + 1 // Adding a student to the listStudents component state
    };
    let students = [...this.props.state.students, student];
    this.props.setState({
      students: students
    });
  };

  render() {
    const { step } = this.state;
    const { firstname, lastname, grade, age, notes, parentemail } = this.state;
    const values = { firstname, lastname, grade, age, notes, parentemail };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep} // Using props to pass data from one component to another
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep} // Using props to pass data from one component to another
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep} // Using props to pass data from one component to another
            prevStep={this.prevStep}
            confirm={this.handleConfirm}
            values={values}
          />
        );
      case 4:
        return <div>{this.resetState()};</div>; // State is reset after one instance of an input is added to the list
      default:
        console.log("not valid");
    }
  }
}

export default UserForm;
