import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    // const { values } = this.props.values;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details"></AppBar>
          <TextField
            hintText="Enter your First Name"
            floatingLabelText="First Name"
            onChange={this.props.handleChange("firstname")}
            defaultValue={this.props.values.firstname}
          />
          <br />
          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Last Name"
            onChange={this.props.handleChange("lastname")}
            defaultValue={this.props.values.firstname}
          />
          <br />
          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={this.props.handleChange("email")}
            defaultValue={this.props.values.email}
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
const styles = {
  button: {
    margin: 15
  }
};
export default FormUserDetails;
