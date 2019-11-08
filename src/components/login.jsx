import React, { Component } from "react";
import "./SignUp.css";

class Login extends Component {
  
    handleLogin = e => {
      e.preventDefault();
    };
    handleChange = e => {
      e.preventDefault();
      };

    render() {
      return (
        <div className="full-wrap">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleLogin} noValidate>
  
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
              </div>
  
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  className=""
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
              </div>
  
              <div className="login">
                <button type="login">Login</button>
                <small>Does not Have an Account?</small><button>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
  
  export default Login;

