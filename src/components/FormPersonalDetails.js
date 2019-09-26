import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    // const { values } = this.props.values;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details"></AppBar>
          <TextField
            hintText="Enter your Occupation"
            floatingLabelText="Occupation"
            onChange={this.props.handleChange("occupation")}
            defaultValue={this.props.values.occupation}
          />
          <br />
          <TextField
            hintText="Enter your City"
            floatingLabelText="City"
            onChange={this.props.handleChange("city")}
            defaultValue={this.props.values.city}
          />
          <br />
          <TextField
            hintText="Enter your Bio"
            floatingLabelText="Bio"
            onChange={this.props.handleChange("bio")}
            defaultValue={this.props.values.bio}
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
const styles = {
  button: {
    margin: 15
  }
};
export default FormPersonalDetails;
