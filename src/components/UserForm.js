import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./confirm";

class UserForm extends Component {
  state = {
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };
  // Handle Fields Change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
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
  render() {
    const { step } = this.state;
    const { firstname, lastname, email, occupation, city, bio } = this.state;
    const values = { firstname, lastname, email, occupation, city, bio };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onClick={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <h1>Success</h1>;
    }
  }
}

export default UserForm;
