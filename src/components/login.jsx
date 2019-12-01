//reference: https://github.com/lingonsaft/React-FirebaseUi-Authentication/blob/master/src/App.js


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { NavigationBar } from "./navigation";
import Background from './backGround';
import Enrolled from './enrolled';
import Profile from './profile';

class Login extends Component {
  state = { isSignedIn: false} 
  
  uiConfig = {
    //signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      //console.log("user", user)
    })
  }
  render() {
      return(
        <div className="login" align="center">
        <form >
        {this.state.isSignedIn ? (
          <div>
            <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/background" component={Background} />
          <Route path="/profile" component={Profile} />
          <Route path="/enrolled" component={Enrolled} />
         
        </Switch>
      </Router>
      </React.Fragment>
            <button onClick={() => firebase.auth().signOut()}>Sign Out!</button>
            <h2>{firebase.auth().currentUser.displayGender}</h2>
            <img
              alt="profile"
              src={firebase.auth().currentUser.photoURL}
            />
          </div>

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

export default Login

