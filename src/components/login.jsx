//reference: https://github.com/lingonsaft/React-FirebaseUi-Authentication/blob/master/src/App.js
import React, { Component } from "react";
import { Button } from "antd";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import StudentList from "./listStudent";
// import Inline from "./inline";

class Login extends Component {
  state = { isSignedIn: false, step: 0 };
  uiConfig = {
    //signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  nextStep = () => {
    const { step } = this.state;
    if (firebase.auth().currentUser.displayName === "James Guru") {
      this.setState({
        step: step + 1
      });
    }
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  render() {
    const { step } = this.state;

    switch (step) {
      default:
        return (
          <div className="CenterA">
            <form>
              {this.state.isSignedIn ? (
                <span>
                  <Button onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Button>
                  <Button onClick={this.nextStep}>Next</Button>
                  <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                  <img
                    alt="profile"
                    src={firebase.auth().currentUser.photoURL}
                  />
                  <br></br>
                </span>
              ) : (
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              )}
            </form>
          </div>
        );
      case 1:
        return (
          <div>
            {this.state.isSignedIn ? (
              <span>
                <StudentList />
              </span>
            ) : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}{" "}
            <br></br>
            <Button onClick={this.prevStep}>Back</Button>
          </div>
        );
    }
  }
}

export default Login;
