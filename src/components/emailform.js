import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class Emailform extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, subject, message } = this.state;

    const form = await axios.post("/api/form", {
      name,
      email,
      subject,
      message
    });
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input type="text" name="name" onChange={this.handleChange}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email:</Label>
          <Input type="text" name="email" onChange={this.handleChange}></Input>
        </FormGroup>

        <FormGroup>
          <Label for="subject">Subject:</Label>
          <Input
            type="text"
            name="subject"
            onChange={this.handleChange}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="message">Message:</Label>
          <Input
            type="textarea"
            name="message"
            onChange={this.handleChange}
          ></Input>
        </FormGroup>

        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}

export default Emailform;
