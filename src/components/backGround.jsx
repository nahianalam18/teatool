
import React, { Component } from 'react';
import firebase from "firebase";
//import styled from 'styled-components';

export default class Background extends Component{
    render() {
        // var user = {
        //     name:firebase.auth().currentUser.displayName,
        //     email:firebase.auth().currentUser.displayEmail
        // };
        return(
    <div><h1>User = {firebase.auth().currentUser.displayName}
            </h1></div>
        );
    }
}
