import React, { Component } from 'react';
import "./teachersProfile.css";

export default class Toggle extends Component {
    state = {
        on: false,
    }
    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    
    render() {
        return (
            <div className = "enrolled">
                {this.state.on && <h1> Enrolled Students </h1>}
                <button alt = "Enrolled students" onClick = {this.toggle}> Enrolled </button>
            </div>
        )
    }
}



