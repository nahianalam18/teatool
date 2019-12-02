//reference: https://github.com/lingonsaft/React-FirebaseUi-Authentication/blob/master/src/App.js
import React, { Component } from "react";
import { Button } from "antd";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Inline from "./inline";

class Login extends Component {
  state = { isSignedIn: false };
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

  render() {
    return (
      <div className="CenterA">
        <form>
          {this.state.isSignedIn ? (
            <span>
              <Inline></Inline>
              <Button onClick={() => firebase.auth().signOut()}>
                Sign Out
              </Button>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <img alt="profile" src={firebase.auth().currentUser.photoURL} />
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
  }
}

export default Login;
