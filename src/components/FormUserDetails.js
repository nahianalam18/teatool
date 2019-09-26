import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault(); // Function used to handle continue
    this.props.nextStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Student Details"></AppBar>
          <TextField // Text Fields to let the Teacher enter data of the student
            hintText="First name of the student"
            floatingLabelText="First Name"
            onChange={this.props.handleChange("firstname")}
            defaultValue={this.props.values.firstname}
          />
          <br />
          <TextField
            hintText="Last name of the student"
            floatingLabelText="Last Name"
            onChange={this.props.handleChange("lastname")}
            defaultValue={this.props.values.lastname}
          />
          <br />
          <TextField
            hintText="Enter grade of the student"
            floatingLabelText="Grade"
            onChange={this.props.handleChange("grade")}
            defaultValue={this.props.values.grade}
          />
          <br></br>
          <TextField
            hintText="Enter age of the student"
            floatingLabelText="Age"
            onChange={this.props.handleChange("age")}
            defaultValue={this.props.values.age}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={StyleSheet.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
