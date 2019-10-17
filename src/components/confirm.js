import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {
  continue = e => {
    // Process FORM
    this.props.confirm(e);
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstname, lastname, grade, age, notes, parentemail }
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm" />
          <List>
            {" "}
            {/* Listing all the data entered by the Teacher  */}
            <ListItem primaryText="First Name" secondaryText={firstname} />
            <ListItem primaryText="Last Name" secondaryText={lastname} />
            <ListItem primaryText="Grade" secondaryText={grade} />
            <ListItem primaryText="Age" secondaryText={age} />
            <ListItem primaryText="Notes" secondaryText={notes} />
            <ListItem primaryText="Parent Email" secondaryText={parentemail} />
          </List>
          <RaisedButton
            label="Back"
            danger={true}
            style={StyleSheet.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={StyleSheet.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
// const styles = {
//   button: {
//     margin: 15
//   }
// };
export default Confirm;
