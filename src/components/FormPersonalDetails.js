import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = e => {
    // Function used to handle continue button click
    e.preventDefault();
    this.props.nextStep();
  };
  // Function used to go back to previous Menu
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details"></AppBar>
          <TextField // Text Fields to enter some personal details of the student
            hintText="Make some notes"
            floatingLabelText="Notes"
            onChange={this.props.handleChange("notes")}
            defaultValue={this.props.values.notes}
          />
          <br />
          <TextField
            hintText="Enter the parent's email"
            floatingLabelText="parentemail"
            onChange={this.props.handleChange("parentemail")}
            defaultValue={this.props.values.parentemail}
          />
          <br />
          <RaisedButton
            label="Back"
            danger={true}
            style={StyleSheet.button}
            onClick={this.back}
          />
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

export default FormPersonalDetails;
